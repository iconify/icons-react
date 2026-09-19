import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kufn89bdz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kufn89bdz"/>`,
		"fallback": "fa6-solid:person-circle-question",
	});
}

export default Component;
