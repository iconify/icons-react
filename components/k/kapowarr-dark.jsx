import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js-p82bty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js-p82bty"/>`,
		"fallback": "selfhst:kapowarr-dark",
	});
}

export default Component;
