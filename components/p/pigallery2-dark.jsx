import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teo6q429b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teo6q429b"/>`,
		"fallback": "selfhst:pigallery2-dark",
	});
}

export default Component;
