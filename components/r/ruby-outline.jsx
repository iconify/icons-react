import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiw_s6b9o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiw_s6b9o"/>`,
		"fallback": "teenyicons:ruby-outline",
	});
}

export default Component;
