import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se5j6sb6f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se5j6sb6f"/>`,
		"fallback": "carbon:order-stratus",
	});
}

export default Component;
