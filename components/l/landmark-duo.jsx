import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkt4azh-d.css';
import '../../css/c/cpxddn93q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkt4azh-d"/><path class="cpxddn93q"/></g>`,
		"fallback": "glyphs:landmark-duo",
	});
}

export default Component;
