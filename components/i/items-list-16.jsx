import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f60vnpbnl.css';
import '../../css/i/iv6-xf8hg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f60vnpbnl"/><path class="iv6-xf8hg"/>`,
		"fallback": "qlementine-icons:items-list-16",
	});
}

export default Component;
