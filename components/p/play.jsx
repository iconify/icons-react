import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq9f_m1cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq9f_m1cu"/>`,
		"fallback": "pixelarticons:play",
	});
}

export default Component;
