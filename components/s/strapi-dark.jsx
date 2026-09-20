import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_rc6bbb.css';
import '../../css/k/ktli5dbnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru_rc6bbb"/><path class="ktli5dbnn"/>`,
		"fallback": "selfhst:strapi-dark",
	});
}

export default Component;
