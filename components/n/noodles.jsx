import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hjlxu-o7z.css';
import '../../css/o/o5ivlpbrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="hjlxu-o7z"/><path class="o5ivlpbrd"/></g>`,
		"fallback": "icon-park-outline:noodles",
	});
}

export default Component;
