import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqxr6w9-j.css';
import '../../css/f/fdwp2r2iv.css';
import '../../css/t/t9rkx8a4l.css';
import '../../css/q/qqbxrmqpy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vqxr6w9-j"><path clip-rule="evenodd" class="fdwp2r2iv"/><path class="t9rkx8a4l"/><path class="qqbxrmqpy"/></g>`,
		"fallback": "glyphs-poly:tag",
	});
}

export default Component;
