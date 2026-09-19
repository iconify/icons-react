import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0hssn4us.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0hssn4us"/>`,
		"fallback": "fluent-emoji-high-contrast:oncoming-police-car",
	});
}

export default Component;
