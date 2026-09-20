import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-734_b6w.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-734_b6w"/>`,
		"fallback": "iwwa:number-desc",
	});
}

export default Component;
