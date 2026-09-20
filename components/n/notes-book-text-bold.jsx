import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxhblib2y.css';
import '../../css/e/e92p4ac2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxhblib2y"/><path class="e92p4ac2t"/>`,
		"fallback": "streamline-ultimate:notes-book-text-bold",
	});
}

export default Component;
