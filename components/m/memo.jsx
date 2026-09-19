import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp95lcb_m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp95lcb_m"/>`,
		"fallback": "dinkie-icons:memo",
	});
}

export default Component;
