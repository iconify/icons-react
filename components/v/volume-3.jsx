import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e0sxuqh5g.css';
import '../../css/o/ol6mscbgo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e0sxuqh5g"/><path class="ol6mscbgo"/></g>`,
		"fallback": "glyphs:volume-3",
	});
}

export default Component;
