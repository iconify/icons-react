import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu_5mwbvl.css';

const viewBox = {"width":1024,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu_5mwbvl"/>`,
		"fallback": "whh:lemon",
	});
}

export default Component;
