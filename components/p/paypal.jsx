import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc05y9bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc05y9bou"/>`,
		"fallback": "meteor-icons:paypal",
	});
}

export default Component;
