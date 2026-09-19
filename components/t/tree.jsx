import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo0ac2boh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo0ac2boh"/>`,
		"fallback": "at-icons:tree",
	});
}

export default Component;
