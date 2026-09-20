import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3hyvhbfs.css';
import '../../css/s/swin4bcne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3hyvhbfs"/><path class="swin4bcne"/>`,
		"fallback": "streamline-freehand:notes-book-1",
	});
}

export default Component;
