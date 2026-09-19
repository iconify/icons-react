import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0_k8b7gn.css';
import '../../css/j/jrfyk5g0s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0_k8b7gn"/><path class="jrfyk5g0s"/></g>`,
		"fallback": "glyphs:map-duo",
	});
}

export default Component;
