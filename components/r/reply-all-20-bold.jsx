import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6nep0q5q.css';
import '../../css/m/m0scgbc4g.css';
import '../../css/v/v8vdtjh7t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6nep0q5q"/><path class="m0scgbc4g"/><path class="v8vdtjh7t"/>`,
		"fallback": "energy-icons:reply-all-20-bold",
	});
}

export default Component;
