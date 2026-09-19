import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hqk3egkyy.css';
import '../../css/v/v9ptjr1pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hqk3egkyy"/><path class="v9ptjr1pl"/></g>`,
		"fallback": "hugeicons:keyframe-align-vertical",
	});
}

export default Component;
