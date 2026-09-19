import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/onp0iebwy.css';
import '../../css/b/bu5p-5yej.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="onp0iebwy"/><path class="bu5p-5yej"/></g>`,
		"fallback": "cryptocurrency-color:pirl",
	});
}

export default Component;
