import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgw8jg94a.css';
import '../../css/h/h0njrttoz.css';
import '../../css/o/o5grrub_r.css';
import '../../css/v/v3tt3fb5u.css';
import '../../css/d/dcgw77bis.css';
import '../../css/y/ym1b48f-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="fgw8jg94a"/><path class="h0njrttoz"/><circle class="o5grrub_r"/><path class="v3tt3fb5u"/><circle class="dcgw77bis"/><path class="ym1b48f-r"/></g>`,
		"fallback": "streamline:interface-setting-slider-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider",
	});
}

export default Component;
