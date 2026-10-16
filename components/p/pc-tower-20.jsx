import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb6fqqb0z.css';
import '../../css/u/u8f88948k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb6fqqb0z"/><path class="u8f88948k"/>`,
		"fallback": "energy-icons:pc-tower-20",
	});
}

export default Component;
