import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n38m44b8l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n38m44b8l"/>`,
		"fallback": "f7:slash-circle",
	});
}

export default Component;
