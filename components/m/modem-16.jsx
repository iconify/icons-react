import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwgigf3lc.css';
import '../../css/o/ozoapvbsy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwgigf3lc"/><path clip-rule="evenodd" class="ozoapvbsy"/>`,
		"fallback": "qlementine-icons:modem-16",
	});
}

export default Component;
