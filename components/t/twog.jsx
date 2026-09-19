import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzw70nbkn.css';

const viewBox = {"width":1025,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzw70nbkn"/>`,
		"fallback": "whh:twog",
	});
}

export default Component;
