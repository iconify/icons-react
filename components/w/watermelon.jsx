import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nug-zsezx.css';

const viewBox = {"width":1025,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nug-zsezx"/>`,
		"fallback": "whh:watermelon",
	});
}

export default Component;
