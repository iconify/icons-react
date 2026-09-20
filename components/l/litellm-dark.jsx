import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_y277zwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_y277zwy"/>`,
		"fallback": "selfhst:litellm-dark",
	});
}

export default Component;
