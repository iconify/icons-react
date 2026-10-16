import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpwlrrj0w.css';
import '../../css/v/vc4rurisx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpwlrrj0w"/><path class="vc4rurisx"/>`,
		"fallback": "energy-icons:silicon-20-bold",
	});
}

export default Component;
