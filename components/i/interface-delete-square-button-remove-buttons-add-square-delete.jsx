import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jv4g3p35s.css';
import '../../css/m/m_k3-2btc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jv4g3p35s"/><rect class="m_k3-2btc"/></g>`,
		"fallback": "streamline:interface-delete-square-button-remove-buttons-add-square-delete",
	});
}

export default Component;
