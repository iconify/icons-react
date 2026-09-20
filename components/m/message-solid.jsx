import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwf0qho5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwf0qho5h"/>`,
		"fallback": "pixel:message-solid",
	});
}

export default Component;
