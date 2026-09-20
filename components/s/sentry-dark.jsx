import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so6_o88bv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so6_o88bv"/>`,
		"fallback": "selfhst:sentry-dark",
	});
}

export default Component;
