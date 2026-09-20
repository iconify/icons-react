import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfa0v7h4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfa0v7h4i"/>`,
		"fallback": "selfhst:slash-light",
	});
}

export default Component;
