import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxv29_lqw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxv29_lqw"/>`,
		"fallback": "dinkie-icons:right-arrow-circled",
	});
}

export default Component;
