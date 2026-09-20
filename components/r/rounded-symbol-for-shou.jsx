import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpj65fbae.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/i/i3vxk5brn.css';
import '../../css/q/quehvibls.css';
import '../../css/n/nnt1b1vcc.css';
import '../../css/a/alou6fbak.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hpj65fbae"/><g class="kdz4acc8r"><circle class="i3vxk5brn"/><path class="quehvibls"/><path class="nnt1b1vcc"/><path class="alou6fbak"/></g>`,
		"fallback": "openmoji:rounded-symbol-for-shou",
	});
}

export default Component;
