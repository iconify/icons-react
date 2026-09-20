import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hvscrmbta.css';
import '../../css/u/u98s8js0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hvscrmbta"/><path class="u98s8js0m"/></g>`,
		"fallback": "mage:message-info-round",
	});
}

export default Component;
