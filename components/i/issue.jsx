import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c318b6b7p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c318b6b7p"/>`,
		"fallback": "whh:issue",
	});
}

export default Component;
