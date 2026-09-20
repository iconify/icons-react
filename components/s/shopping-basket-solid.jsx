import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mit9zdbje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mit9zdbje"/>`,
		"fallback": "la:shopping-basket-solid",
	});
}

export default Component;
