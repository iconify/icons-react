import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v18drh_jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v18drh_jn"/>`,
		"fallback": "solar:lightbulb-outline",
	});
}

export default Component;
