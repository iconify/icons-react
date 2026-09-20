import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg6q3ebhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg6q3ebhw"/>`,
		"fallback": "selfhst:mozilla-dark",
	});
}

export default Component;
