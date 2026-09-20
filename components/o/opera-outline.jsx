import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hii5eibzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hii5eibzz"/>`,
		"fallback": "teenyicons:opera-outline",
	});
}

export default Component;
