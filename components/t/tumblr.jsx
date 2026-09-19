import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk-s2w2fw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk-s2w2fw"/>`,
		"fallback": "whh:tumblr",
	});
}

export default Component;
