import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/n/n8eg9qbgc.css';
import '../../css/p/p230cqbgr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="n8eg9qbgc"/><path class="p230cqbgr"/></g>`,
		"fallback": "glyphs:kiss-duo",
	});
}

export default Component;
