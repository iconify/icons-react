import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdou5jn5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdou5jn5t"/>`,
		"fallback": "qlementine-icons:paint-brush-thin-16",
	});
}

export default Component;
