import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o87ybkebd.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o87ybkebd"/><path class="y7zppqbne"/></g>`,
		"fallback": "hugeicons:second-bracket-square",
	});
}

export default Component;
