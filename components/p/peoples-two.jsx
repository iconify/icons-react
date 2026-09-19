import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/ar5q_mozu.css';
import '../../css/x/xlrrn_4li.css';
import '../../css/m/m3tvcud3p.css';
import '../../css/f/fwaij5b2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ar5q_mozu"/><path class="xlrrn_4li"/><path class="m3tvcud3p"/><path class="fwaij5b2p"/></g>`,
		"fallback": "icon-park-solid:peoples-two",
	});
}

export default Component;
