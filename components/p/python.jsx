import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo9on0mrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo9on0mrg"/>`,
		"fallback": "simple-icons:python",
	});
}

export default Component;
