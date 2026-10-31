import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cibfdeb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cibfdeb2e"/>`,
		"fallback": "coolicons:ratio-21-9-bulk-round",
	});
}

export default Component;
