import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzfk-sivt.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzfk-sivt"/>`,
		"fallback": "fa-solid:user-friends",
	});
}

export default Component;
