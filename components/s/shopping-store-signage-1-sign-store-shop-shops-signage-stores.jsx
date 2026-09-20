import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rsmlr0b7a.css';
import '../../css/v/v7g92w00z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="rsmlr0b7a"/><path class="v7g92w00z"/></g>`,
		"fallback": "streamline:shopping-store-signage-1-sign-store-shop-shops-signage-stores",
	});
}

export default Component;
