import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vaw8akbwy.css';
import '../../css/l/l3_nhub3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vaw8akbwy"/><path class="l3_nhub3p"/></g>`,
		"fallback": "codex:shuffle",
	});
}

export default Component;
