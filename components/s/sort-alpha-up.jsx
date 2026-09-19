import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi11bxbbl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi11bxbbl"/>`,
		"fallback": "fa7-solid:sort-alpha-up",
	});
}

export default Component;
