import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_3ee6a8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_3ee6a8c"/>`,
		"fallback": "tabler:square-chevrons-left-filled",
	});
}

export default Component;
