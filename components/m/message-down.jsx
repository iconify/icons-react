import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qln0q4btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qln0q4btt"/>`,
		"fallback": "tabler:message-down",
	});
}

export default Component;
