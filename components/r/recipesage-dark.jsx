import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it42j-b_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it42j-b_q"/>`,
		"fallback": "selfhst:recipesage-dark",
	});
}

export default Component;
