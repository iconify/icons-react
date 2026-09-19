import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/navarybyr.css';
import '../../css/v/vg8rqdcki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="navarybyr"/><path class="vg8rqdcki"/></g>`,
		"fallback": "hugeicons:profit",
	});
}

export default Component;
