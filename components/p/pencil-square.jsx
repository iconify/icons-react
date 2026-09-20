import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i8f1h8bpi.css';
import '../../css/u/ucpiun25d.css';
import '../../css/t/teu317bgw.css';
import '../../css/y/yz6-n_rdv.css';
import '../../css/l/lmrmygbvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="i8f1h8bpi"/><path class="ucpiun25d"/><path class="teu317bgw"/><path class="yz6-n_rdv"/><path class="lmrmygbvs"/></g>`,
		"fallback": "streamline-plump-color:pencil-square",
	});
}

export default Component;
