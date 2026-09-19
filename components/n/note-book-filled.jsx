import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3jdb-d-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3jdb-d-o"/>`,
		"fallback": "boxicons:note-book-filled",
	});
}

export default Component;
