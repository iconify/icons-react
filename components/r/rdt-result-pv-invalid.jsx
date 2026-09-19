import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncq4rhxwl.css';
import '../../css/i/ihl9zebzu.css';
import '../../css/f/fg8vwubln.css';
import '../../css/u/undon46og.css';
import '../../css/c/c590xtbuw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ncq4rhxwl"/><path class="ihl9zebzu"/><path clip-rule="evenodd" class="fg8vwubln"/><path class="undon46og"/><path clip-rule="evenodd" class="c590xtbuw"/></g>`,
		"fallback": "healthicons:rdt-result-pv-invalid",
	});
}

export default Component;
