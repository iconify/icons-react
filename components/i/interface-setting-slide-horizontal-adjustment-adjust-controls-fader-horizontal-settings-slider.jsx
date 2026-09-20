import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w5fspw-vk.css';
import '../../css/x/xr126cehw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="w5fspw-vk"/><path class="xr126cehw"/></g>`,
		"fallback": "streamline:interface-setting-slide-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider",
	});
}

export default Component;
