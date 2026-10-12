import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2hel0pen.css';
import '../../css/b/b5hazkbpz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2hel0pen"/><path class="b5hazkbpz"/>`,
		"fallback": "energy-icons:memory-chip-20-bold",
	});
}

export default Component;
