import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzwv2ebuz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzwv2ebuz"/>`,
		"fallback": "fa-solid:shopping-basket",
	});
}

export default Component;
