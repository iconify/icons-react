import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv9b7tbjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv9b7tbjw"/>`,
		"fallback": "selfhst:t-mobile",
	});
}

export default Component;
