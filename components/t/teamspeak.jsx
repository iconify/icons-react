import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j96papb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j96papb9q"/>`,
		"fallback": "mdi:teamspeak",
	});
}

export default Component;
