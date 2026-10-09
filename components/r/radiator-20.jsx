import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq6nfxbav.css';
import '../../css/e/eyqb_0bcs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq6nfxbav"/><path class="eyqb_0bcs"/>`,
		"fallback": "energy-icons:radiator-20",
	});
}

export default Component;
