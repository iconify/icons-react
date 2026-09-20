import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wms_x39_g.css';
import '../../css/n/neoxsqsba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wms_x39_g"/><path class="neoxsqsba"/></g>`,
		"fallback": "streamline-logos:obs-studio-logo",
	});
}

export default Component;
