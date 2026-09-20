import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k4qaj8fog.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k4qaj8fog"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:interface-arrows-down-circle-2-arrow-keyboard-circle-button-down",
	});
}

export default Component;
