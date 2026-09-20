import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyn4elw9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyn4elw9b"/>`,
		"fallback": "selfhst:stormkit-dark",
	});
}

export default Component;
