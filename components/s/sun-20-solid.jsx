import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdfm2xl6c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdfm2xl6c"/>`,
		"fallback": "heroicons:sun-20-solid",
	});
}

export default Component;
