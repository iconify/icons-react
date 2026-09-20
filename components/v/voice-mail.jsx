import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ip9gdf7ex.css';
import '../../css/h/hecghxbqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ip9gdf7ex"/><path class="hecghxbqo"/></g>`,
		"fallback": "streamline-flex:voice-mail",
	});
}

export default Component;
