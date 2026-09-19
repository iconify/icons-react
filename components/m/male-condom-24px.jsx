import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d41wx1b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d41wx1b3q"/>`,
		"fallback": "healthicons:male-condom-24px",
	});
}

export default Component;
