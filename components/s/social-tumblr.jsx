import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao59tsqbv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao59tsqbv"/>`,
		"fallback": "simple-line-icons:social-tumblr",
	});
}

export default Component;
