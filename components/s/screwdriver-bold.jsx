import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx0j3m0za.css';
import '../../css/c/cpk8xwb9i.css';
import '../../css/x/xhdogwbyc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="mx0j3m0za"><path class="cpk8xwb9i"/><path class="xhdogwbyc"/></g>`,
		"fallback": "glyphs:screwdriver-bold",
	});
}

export default Component;
