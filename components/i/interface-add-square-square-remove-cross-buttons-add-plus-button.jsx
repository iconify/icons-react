import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oba9rfsja.css';
import '../../css/m/m_k3-2btc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oba9rfsja"/><rect class="m_k3-2btc"/></g>`,
		"fallback": "streamline:interface-add-square-square-remove-cross-buttons-add-plus-button",
	});
}

export default Component;
