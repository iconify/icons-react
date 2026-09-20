import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m5n_83qje.css';
import '../../css/t/tcdk3v4we.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m5n_83qje"/><path class="tcdk3v4we"/></g>`,
		"fallback": "streamline:play-list-9",
	});
}

export default Component;
