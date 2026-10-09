import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anemfwqgt.css';
import '../../css/k/ke851bcgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anemfwqgt"/><path class="ke851bcgq"/>`,
		"fallback": "energy-icons:sort-asc-20-bold",
	});
}

export default Component;
