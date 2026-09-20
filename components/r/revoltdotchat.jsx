import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enc6m9bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enc6m9bnf"/>`,
		"fallback": "simple-icons:revoltdotchat",
	});
}

export default Component;
