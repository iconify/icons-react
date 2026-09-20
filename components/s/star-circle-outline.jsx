import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqm37pb8u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqm37pb8u"/>`,
		"fallback": "teenyicons:star-circle-outline",
	});
}

export default Component;
