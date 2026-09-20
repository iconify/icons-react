import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9q5y8bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9q5y8bzu"/>`,
		"fallback": "tabler:square-chevrons-down-filled",
	});
}

export default Component;
