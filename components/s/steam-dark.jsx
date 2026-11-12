import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lurj54bgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lurj54bgw"/>`,
		"fallback": "selfhst:steam-dark",
	});
}

export default Component;
