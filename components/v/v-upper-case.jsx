import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usjw9sgjt.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usjw9sgjt"/>`,
		"fallback": "whh:v-upper-case",
	});
}

export default Component;
