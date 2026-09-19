import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pau5rcb9y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pau5rcb9y"/>`,
		"fallback": "fa7-solid:plant-wilt",
	});
}

export default Component;
