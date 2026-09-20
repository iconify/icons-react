import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rslhe9b1x.css';
import '../../css/u/uj3javbwk.css';
import '../../css/u/ufnt8ibas.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rslhe9b1x"/><path class="uj3javbwk"/><path class="ufnt8ibas"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:studio-light-side-circle",
	});
}

export default Component;
