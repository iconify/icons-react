import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iicfjbcrf.css';
import '../../css/g/gue_jz8_o.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/u/ujnj-vbxv.css';
import '../../css/g/g_18j8ger.css';
import '../../css/q/qg2cbjbtc.css';
import '../../css/e/e_v7g-lpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iicfjbcrf"/><path class="gue_jz8_o"/><path class="i7sr6ubzr"/><path class="ujnj-vbxv"/><path class="g_18j8ger"/><path class="qg2cbjbtc"/><path class="e_v7g-lpp"/>`,
		"fallback": "gcp:runtime-config",
	});
}

export default Component;
