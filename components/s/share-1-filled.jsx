import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yng5jibsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yng5jibsy"/>`,
		"fallback": "tdesign:share-1-filled",
	});
}

export default Component;
