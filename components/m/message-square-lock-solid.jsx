import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt4nd8izy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt4nd8izy"/>`,
		"fallback": "iconaut:message-square-lock-solid",
	});
}

export default Component;
