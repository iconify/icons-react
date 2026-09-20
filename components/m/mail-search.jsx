import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qq6v5xtsb.css';
import '../../css/f/f2hhzucew.css';
import '../../css/u/u-2j45bbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qq6v5xtsb"/><path class="f2hhzucew"/><path class="u-2j45bbr"/></g>`,
		"fallback": "streamline-plump:mail-search",
	});
}

export default Component;
