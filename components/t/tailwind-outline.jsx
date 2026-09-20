import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo_j2ivdh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wo_j2ivdh"/>`,
		"fallback": "teenyicons:tailwind-outline",
	});
}

export default Component;
