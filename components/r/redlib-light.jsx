import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd8knp7lm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd8knp7lm"/>`,
		"fallback": "selfhst:redlib-light",
	});
}

export default Component;
