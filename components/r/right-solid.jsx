import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt3eht83u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt3eht83u"/>`,
		"fallback": "teenyicons:right-solid",
	});
}

export default Component;
