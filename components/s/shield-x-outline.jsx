import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu0_pgdyp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu0_pgdyp"/>`,
		"fallback": "teenyicons:shield-x-outline",
	});
}

export default Component;
