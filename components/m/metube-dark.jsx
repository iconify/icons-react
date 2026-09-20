import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdt0oujpg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdt0oujpg"/>`,
		"fallback": "selfhst:metube-dark",
	});
}

export default Component;
