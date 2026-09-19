import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mw58ovmcw.css';
import '../../css/v/vco9esbmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mw58ovmcw"/><path class="vco9esbmg"/></g>`,
		"fallback": "healthicons:intravenous-drip-outline",
	});
}

export default Component;
