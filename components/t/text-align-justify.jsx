import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqu8cgb5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqu8cgb5t"/>`,
		"fallback": "carbon:text-align-justify",
	});
}

export default Component;
