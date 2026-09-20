import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbolm7bdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbolm7bdc"/>`,
		"fallback": "selfhst:vue-js-dark",
	});
}

export default Component;
