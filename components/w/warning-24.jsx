import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4c1tgbar.css';
import '../../css/p/p33tsvx9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4c1tgbar"/><path clip-rule="evenodd" class="p33tsvx9n"/>`,
		"fallback": "qlementine-icons:warning-24",
	});
}

export default Component;
