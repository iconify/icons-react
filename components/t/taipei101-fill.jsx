import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh0qq1b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vh0qq1b_s"/>`,
		"fallback": "mingcute:taipei101-fill",
	});
}

export default Component;
