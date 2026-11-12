import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqx5e5n2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqx5e5n2l"/>`,
		"fallback": "selfhst:united-airlines-dark",
	});
}

export default Component;
