import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjzkr_tlv.css';
import '../../css/w/wdhb6ixpv.css';
import '../../css/a/axh1avblo.css';
import '../../css/o/odrl5kb4x.css';
import '../../css/k/ky8obwb_s.css';
import '../../css/o/o9baeq6dr.css';
import '../../css/n/n3lkwqp-w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjzkr_tlv"/><path class="wdhb6ixpv"/><path class="axh1avblo"/><path class="odrl5kb4x"/><path class="ky8obwb_s"/><path class="o9baeq6dr"/><path class="n3lkwqp-w"/>`,
		"fallback": "openmoji:pushpin",
	});
}

export default Component;
