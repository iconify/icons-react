import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/inuemh_cj.css';
import '../../css/p/plqj0diha.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(-45 7 7)" class="inuemh_cj"/><path class="plqj0diha"/></g>`,
		"fallback": "streamline:interface-arrows-expand-vertical-diamond-arrow-diamond-data-vertical-data-internet-transfer-network",
	});
}

export default Component;
