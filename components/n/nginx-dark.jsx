import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x35lossty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x35lossty"/>`,
		"fallback": "selfhst:nginx-dark",
	});
}

export default Component;
