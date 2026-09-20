import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub4w97u6x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub4w97u6x"/>`,
		"fallback": "teenyicons:user-minus-solid",
	});
}

export default Component;
