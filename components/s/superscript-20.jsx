import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k50br_b8z.css';
import '../../css/t/t3e4vmwxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k50br_b8z"/><path class="t3e4vmwxh"/>`,
		"fallback": "energy-icons:superscript-20",
	});
}

export default Component;
