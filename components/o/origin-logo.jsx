import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/guewfbcxi.css';
import '../../css/u/uawz29b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="guewfbcxi"/><path class="uawz29b3i"/></g>`,
		"fallback": "streamline-logos:origin-logo",
	});
}

export default Component;
