import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouc5jvb7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouc5jvb7k"/>`,
		"fallback": "teenyicons:section-add-outline",
	});
}

export default Component;
