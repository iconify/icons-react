import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_k3-2btc.css';
import '../../css/t/t48jvub_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="m_k3-2btc"/><path class="t48jvub_e"/></g>`,
		"fallback": "streamline:interface-validation-check-square-1-check-form-validation-checkmark-success-add-addition-box-square",
	});
}

export default Component;
