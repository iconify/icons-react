import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn-h0obmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn-h0obmj"/>`,
		"fallback": "selfhst:outline-dark",
	});
}

export default Component;
