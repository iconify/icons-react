import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tjduf9bpi.css';
import '../../css/c/cvpx6nlyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tjduf9bpi"/><path class="cvpx6nlyr"/></g>`,
		"fallback": "hugeicons:step-forward",
	});
}

export default Component;
