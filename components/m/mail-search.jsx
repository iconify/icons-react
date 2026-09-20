import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv-g7mbyv.css';
import '../../css/q/q_akygbwy.css';
import '../../css/n/nmg90_b5o.css';
import '../../css/b/b9eijfewy.css';
import '../../css/e/ej9k9gb1i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dv-g7mbyv"/><path class="q_akygbwy"/><path class="nmg90_b5o"/><path class="b9eijfewy"/><path class="ej9k9gb1i"/></g>`,
		"fallback": "streamline-color:mail-search",
	});
}

export default Component;
