import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzlgly3ke.css';
import '../../css/q/qrhmcj17p.css';
import '../../css/i/i-dn492le.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zzlgly3ke"><path class="qrhmcj17p"/><path class="i-dn492le"/></g>`,
		"fallback": "icon-park-outline:vigo",
	});
}

export default Component;
