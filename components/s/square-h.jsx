import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3nulybgk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3nulybgk"/>`,
		"fallback": "fa7-solid:square-h",
	});
}

export default Component;
