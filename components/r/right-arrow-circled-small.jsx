import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t11qeu26y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t11qeu26y"/>`,
		"fallback": "dinkie-icons:right-arrow-circled-small",
	});
}

export default Component;
