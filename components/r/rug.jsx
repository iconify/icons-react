import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx3b7pbql.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx3b7pbql"/>`,
		"fallback": "fa7-solid:rug",
	});
}

export default Component;
