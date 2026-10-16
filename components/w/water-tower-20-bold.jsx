import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvj-7zctj.css';
import '../../css/q/qn7t179un.css';
import '../../css/k/k-26e659n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvj-7zctj"/><path class="qn7t179un"/><path class="k-26e659n"/>`,
		"fallback": "energy-icons:water-tower-20-bold",
	});
}

export default Component;
