import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohi4kqh9v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohi4kqh9v"/>`,
		"fallback": "teenyicons:minimise-outline",
	});
}

export default Component;
