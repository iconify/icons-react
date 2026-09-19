import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gangf8bof.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gangf8bof"/><path class="y7zppqbne"/></g>`,
		"fallback": "hugeicons:third-bracket-square",
	});
}

export default Component;
