import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eie5jacms.css';
import '../../css/i/iulrv-ufv.css';
import '../../css/c/copyle26i.css';
import '../../css/i/if82eubsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="eie5jacms"/><path class="iulrv-ufv"/><path class="copyle26i"/><path class="if82eubsf"/></g>`,
		"fallback": "streamline-cyber:shopping-cart-user-4",
	});
}

export default Component;
