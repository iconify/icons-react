import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egv8nrbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egv8nrbut"/>`,
		"fallback": "simple-icons:n8n",
	});
}

export default Component;
