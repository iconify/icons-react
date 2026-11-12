import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raj4z-pfe.css';
import '../../css/l/lx0j_nfbx.css';
import '../../css/i/iyxxnubym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raj4z-pfe"/><path class="lx0j_nfbx"/><path class="iyxxnubym"/>`,
		"fallback": "selfhst:invoiceplane-light",
	});
}

export default Component;
