import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eh-3--eyg.css';
import '../../css/o/o5ivlpbrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="eh-3--eyg"/><path class="o5ivlpbrd"/></g>`,
		"fallback": "icon-park-solid:noodles",
	});
}

export default Component;
