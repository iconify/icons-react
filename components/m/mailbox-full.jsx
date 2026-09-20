import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iikr6dbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iikr6dbva"/>`,
		"fallback": "stash:mailbox-full",
	});
}

export default Component;
