import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vwut17bll.css';
import '../../css/z/z59__b_me.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="vwut17bll"/><path class="z59__b_me"/></g>`,
		"fallback": "streamline:interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider-1",
	});
}

export default Component;
