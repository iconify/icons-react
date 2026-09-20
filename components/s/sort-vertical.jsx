import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arb81b3en.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arb81b3en"/>`,
		"fallback": "ooui:sort-vertical",
	});
}

export default Component;
