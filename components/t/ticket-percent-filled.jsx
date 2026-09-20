import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzblx-bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kzblx-bxe"/>`,
		"fallback": "reicon:ticket-percent-filled",
	});
}

export default Component;
