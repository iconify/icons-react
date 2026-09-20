import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlv355f2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlv355f2k"/>`,
		"fallback": "selfhst:nintendo-switch-dark",
	});
}

export default Component;
