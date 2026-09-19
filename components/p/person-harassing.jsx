import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeos434il.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeos434il"/>`,
		"fallback": "fa7-solid:person-harassing",
	});
}

export default Component;
