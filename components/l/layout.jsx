import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgs64kbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgs64kbvn"/>`,
		"fallback": "pixelarticons:layout",
	});
}

export default Component;
