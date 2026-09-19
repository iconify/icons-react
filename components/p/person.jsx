import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-7v9o66a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-7v9o66a"/>`,
		"fallback": "carbon:person",
	});
}

export default Component;
