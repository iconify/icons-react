import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfn3-2b2h.css';
import '../../css/m/mgaiuk4dq.css';
import '../../css/e/e9665qbwc.css';
import '../../css/x/x21x2pqay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfn3-2b2h"/><path class="mgaiuk4dq"/><path class="e9665qbwc"/><path class="x21x2pqay"/>`,
		"fallback": "selfhst:latex",
	});
}

export default Component;
