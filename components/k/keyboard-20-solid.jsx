import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad106q2ot.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ad106q2ot"/>`,
		"fallback": "sidekickicons:keyboard-20-solid",
	});
}

export default Component;
