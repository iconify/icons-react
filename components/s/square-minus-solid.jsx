import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blalr_7lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blalr_7lp"/>`,
		"fallback": "stash:square-minus-solid",
	});
}

export default Component;
