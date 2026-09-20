import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbncidbdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbncidbdk"/>`,
		"fallback": "selfhst:letterfeed-dark",
	});
}

export default Component;
