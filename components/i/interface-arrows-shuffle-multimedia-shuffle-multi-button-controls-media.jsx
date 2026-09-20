import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n_8vkzsqx.css';
import '../../css/h/h2d4w9b-e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n_8vkzsqx"/><path class="h2d4w9b-e"/></g>`,
		"fallback": "streamline:interface-arrows-shuffle-multimedia-shuffle-multi-button-controls-media",
	});
}

export default Component;
