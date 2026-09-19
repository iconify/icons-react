import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1cu7h-rg.css';
import '../../css/c/cumd4_c6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i1cu7h-rg"/><path class="cumd4_c6d"/></g>`,
		"fallback": "iconoir:microphone-mute",
	});
}

export default Component;
