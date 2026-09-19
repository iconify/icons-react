import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abvus-bzy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abvus-bzy"/>`,
		"fallback": "carbon:text-bold",
	});
}

export default Component;
