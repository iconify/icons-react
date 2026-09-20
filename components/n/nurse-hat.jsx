import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mlkht12yr.css';
import '../../css/u/ulwiv9b4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mlkht12yr"/><path class="ulwiv9b4k"/></g>`,
		"fallback": "streamline:nurse-hat",
	});
}

export default Component;
