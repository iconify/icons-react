import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vzj-bcc5h.css';
import '../../css/y/y0g_zotte.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="vzj-bcc5h"/><path class="y0g_zotte"/></g>`,
		"fallback": "streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole",
	});
}

export default Component;
