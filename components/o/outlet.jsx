import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p66n0forz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p66n0forz"/>`,
		"fallback": "ion:outlet",
	});
}

export default Component;
