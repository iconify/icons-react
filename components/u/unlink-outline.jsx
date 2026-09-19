import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmppn6u6w.css';
import '../../css/s/s-10dk9fv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmppn6u6w"/><path class="s-10dk9fv"/></g>`,
		"fallback": "glyphs:unlink-outline",
	});
}

export default Component;
