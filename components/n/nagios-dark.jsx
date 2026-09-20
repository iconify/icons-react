import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlrgzl5mj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlrgzl5mj"/>`,
		"fallback": "selfhst:nagios-dark",
	});
}

export default Component;
