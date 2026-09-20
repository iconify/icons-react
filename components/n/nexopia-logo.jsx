import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kx2q__brx.css';
import '../../css/g/gvn3jbcrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kx2q__brx"/><path class="gvn3jbcrn"/></g>`,
		"fallback": "streamline-logos:nexopia-logo",
	});
}

export default Component;
