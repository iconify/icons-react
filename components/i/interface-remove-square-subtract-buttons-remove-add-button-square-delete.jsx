import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e03jjq99j.css';
import '../../css/m/m_k3-2btc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e03jjq99j"/><rect class="m_k3-2btc"/></g>`,
		"fallback": "streamline:interface-remove-square-subtract-buttons-remove-add-button-square-delete",
	});
}

export default Component;
