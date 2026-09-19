import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i82ymobjg.css';

const viewBox = {"width":536,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i82ymobjg"/>`,
		"fallback": "fa-solid:star-half-alt",
	});
}

export default Component;
