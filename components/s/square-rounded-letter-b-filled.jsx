import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7xaqs2ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7xaqs2ci"/>`,
		"fallback": "tabler:square-rounded-letter-b-filled",
	});
}

export default Component;
