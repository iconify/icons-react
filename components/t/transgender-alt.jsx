import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltmd9og8o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltmd9og8o"/>`,
		"fallback": "fa7-solid:transgender-alt",
	});
}

export default Component;
