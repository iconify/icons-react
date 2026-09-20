import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw87rsb5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fw87rsb5v"/>`,
		"fallback": "streamline:play-list-folder-solid",
	});
}

export default Component;
