import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d0uzcnr4z.css';
import '../../css/w/wz8yr4cyb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="d0uzcnr4z"/><path class="wz8yr4cyb"/></g>`,
		"fallback": "streamline:travel-hotel-air-conditioner-heating-ac-air-hvac-cool-cooling-cold-hot-conditioning",
	});
}

export default Component;
