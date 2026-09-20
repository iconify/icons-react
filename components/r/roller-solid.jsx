import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz9kdgpzh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz9kdgpzh"/>`,
		"fallback": "teenyicons:roller-solid",
	});
}

export default Component;
