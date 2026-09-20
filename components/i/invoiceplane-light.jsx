import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2jubac4c.css';
import '../../css/h/hydjcxbrq.css';
import '../../css/i/iyxxnubym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2jubac4c"/><path class="hydjcxbrq"/><path class="iyxxnubym"/>`,
		"fallback": "selfhst:invoiceplane-light",
	});
}

export default Component;
