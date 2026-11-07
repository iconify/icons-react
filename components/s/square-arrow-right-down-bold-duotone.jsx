import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atpjn6hvy.css';
import '../../css/a/at2vc6bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atpjn6hvy"/><path class="at2vc6bce"/>`,
		"fallback": "solar:square-arrow-right-down-bold-duotone",
	});
}

export default Component;
