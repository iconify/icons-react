import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcm97eguq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcm97eguq"/>`,
		"fallback": "heroicons:puzzle-piece",
	});
}

export default Component;
