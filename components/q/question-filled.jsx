import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czux3lq-u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czux3lq-u"/>`,
		"fallback": "ep:question-filled",
	});
}

export default Component;
