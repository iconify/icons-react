import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reb0h0_rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reb0h0_rc"/>`,
		"fallback": "pixelarticons:note",
	});
}

export default Component;
