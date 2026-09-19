import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be0ngpbvp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be0ngpbvp"/>`,
		"fallback": "fa7-solid:shrimp",
	});
}

export default Component;
