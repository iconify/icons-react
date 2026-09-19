import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0q9ccqak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f0q9ccqak"/>`,
		"fallback": "codicon:surround-with",
	});
}

export default Component;
