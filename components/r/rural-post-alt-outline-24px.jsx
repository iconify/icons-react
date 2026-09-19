import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijthh537c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ijthh537c"/>`,
		"fallback": "healthicons:rural-post-alt-outline-24px",
	});
}

export default Component;
