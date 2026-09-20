import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waf58ub9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waf58ub9v"/>`,
		"fallback": "keyline-icons:phone-duotone",
	});
}

export default Component;
