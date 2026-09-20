import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mnu8m3bjj.css';
import '../../css/n/n1i3qywtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mnu8m3bjj"/><path class="n1i3qywtd"/></g>`,
		"fallback": "streamline-logos:plurk-logo-2",
	});
}

export default Component;
