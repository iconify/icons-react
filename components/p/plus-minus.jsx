import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6a0yfbkw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6a0yfbkw"/>`,
		"fallback": "fa7-solid:plus-minus",
	});
}

export default Component;
