import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn7w4tbii.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn7w4tbii"/>`,
		"fallback": "fa-solid:user-minus",
	});
}

export default Component;
