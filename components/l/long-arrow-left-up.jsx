import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/za4dq5dii.css';
import '../../css/l/lz7qisafo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="za4dq5dii"/><path class="lz7qisafo"/></g>`,
		"fallback": "iconoir:long-arrow-left-up",
	});
}

export default Component;
