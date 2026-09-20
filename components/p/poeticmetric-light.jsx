import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb-64f8xt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb-64f8xt"/>`,
		"fallback": "selfhst:poeticmetric-light",
	});
}

export default Component;
