import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w006lobzc.css';
import '../../css/t/tx2rzib1i.css';
import '../../css/d/d-m49pkha.css';
import '../../css/x/xmfwdpb2z.css';
import '../../css/r/rf_0x3gtv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w006lobzc"/><path class="tx2rzib1i"/><path class="d-m49pkha"/><path class="xmfwdpb2z"/><path class="rf_0x3gtv"/>`,
		"fallback": "selfhst:jupyter",
	});
}

export default Component;
