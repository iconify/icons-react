import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo26x2-5t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo26x2-5t"/>`,
		"fallback": "dinkie-icons:snow-capped-mountain",
	});
}

export default Component;
