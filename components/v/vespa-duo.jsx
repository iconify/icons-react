import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/t/tx2ft5brl.css';
import '../../css/p/piwafmb9b.css';
import '../../css/c/c5eoa18_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="tx2ft5brl"/><path class="piwafmb9b"/><path class="c5eoa18_o"/></g>`,
		"fallback": "streamline-kameleon-color:vespa-duo",
	});
}

export default Component;
