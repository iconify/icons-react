import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hfzzsqbvr.css';
import '../../css/u/u3sozlbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hfzzsqbvr"/><path class="u3sozlbma"/></g>`,
		"fallback": "streamline-ultimate:receipt-dollar",
	});
}

export default Component;
