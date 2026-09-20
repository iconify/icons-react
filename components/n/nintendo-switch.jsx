import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iekhtubws.css';
import '../../css/e/eoi_7w6aq.css';
import '../../css/y/yq5yyzb_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iekhtubws"/><path class="eoi_7w6aq"/><path class="yq5yyzb_d"/></g>`,
		"fallback": "streamline:nintendo-switch",
	});
}

export default Component;
