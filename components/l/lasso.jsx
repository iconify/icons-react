import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_i7i9-5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_i7i9-5j"/>`,
		"fallback": "carbon:lasso",
	});
}

export default Component;
