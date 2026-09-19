import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y450jp-4r.css';
import '../../css/c/c-iy5mskk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y450jp-4r"/><path class="c-iy5mskk"/></g>`,
		"fallback": "hugeicons:pocket-knife",
	});
}

export default Component;
