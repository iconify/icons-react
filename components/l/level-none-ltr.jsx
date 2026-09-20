import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0ylx01sh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0ylx01sh"/>`,
		"fallback": "ooui:level-none-ltr",
	});
}

export default Component;
