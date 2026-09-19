import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7eqbg9te.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7eqbg9te"/>`,
		"fallback": "fa7-solid:rss-square",
	});
}

export default Component;
