import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6xge00qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i6xge00qy"/>`,
		"fallback": "solar:undo-left-round-outline",
	});
}

export default Component;
