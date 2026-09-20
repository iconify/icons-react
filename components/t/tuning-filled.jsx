import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgalhrb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgalhrb_y"/>`,
		"fallback": "reicon:tuning-filled",
	});
}

export default Component;
