import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by7fs_z4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by7fs_z4q"/>`,
		"fallback": "withicons:strikethrough-gloss",
	});
}

export default Component;
