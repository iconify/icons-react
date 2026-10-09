import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt6n36bom.css';
import '../../css/k/k6hjx-z6j.css';
import '../../css/i/i-a1w2n6j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt6n36bom"/><path class="k6hjx-z6j"/><path class="i-a1w2n6j"/>`,
		"fallback": "energy-icons:price-down-20-bold",
	});
}

export default Component;
