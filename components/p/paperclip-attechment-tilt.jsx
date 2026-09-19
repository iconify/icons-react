import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flimd_qzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flimd_qzd"/>`,
		"fallback": "ci:paperclip-attechment-tilt",
	});
}

export default Component;
