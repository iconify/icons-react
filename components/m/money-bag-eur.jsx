import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihf1r4aus.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihf1r4aus"/>`,
		"fallback": "dinkie-icons:money-bag-eur",
	});
}

export default Component;
