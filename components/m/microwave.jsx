import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rwv5uqbul.css';
import '../../css/i/iwex9xbbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rwv5uqbul"/><path class="iwex9xbbw"/></g>`,
		"fallback": "streamline:microwave",
	});
}

export default Component;
