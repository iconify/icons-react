import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzr5unb8m.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzr5unb8m"/>`,
		"fallback": "whh:route",
	});
}

export default Component;
