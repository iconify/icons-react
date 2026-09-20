import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foqzwjl-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foqzwjl-j"/>`,
		"fallback": "qlementine-icons:note-8th-simple-16",
	});
}

export default Component;
