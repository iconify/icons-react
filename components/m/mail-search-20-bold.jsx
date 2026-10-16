import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udb4q3cvm.css';
import '../../css/k/k4f35ou0d.css';
import '../../css/e/e8_sa6eqg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udb4q3cvm"/><path class="k4f35ou0d"/><path class="e8_sa6eqg"/>`,
		"fallback": "energy-icons:mail-search-20-bold",
	});
}

export default Component;
