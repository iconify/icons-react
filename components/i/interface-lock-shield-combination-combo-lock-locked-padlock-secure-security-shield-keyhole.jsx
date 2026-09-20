import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yotllrbun.css';
import '../../css/e/egwjolbfe.css';
import '../../css/u/utq6tewvn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yotllrbun"/><circle class="egwjolbfe"/><path class="utq6tewvn"/></g>`,
		"fallback": "streamline:interface-lock-shield-combination-combo-lock-locked-padlock-secure-security-shield-keyhole",
	});
}

export default Component;
