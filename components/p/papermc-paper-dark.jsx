import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd137wckp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd137wckp"/>`,
		"fallback": "selfhst:papermc-paper-dark",
	});
}

export default Component;
