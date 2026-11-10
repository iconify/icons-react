import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ims0hnb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ims0hnb3b"/>`,
		"fallback": "sidekickicons:user-x-mark-solid",
	});
}

export default Component;
