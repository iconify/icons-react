import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_4bjxbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_4bjxbpe"/>`,
		"fallback": "tabler:message-report-filled",
	});
}

export default Component;
