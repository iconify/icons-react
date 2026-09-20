import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldbtn_0ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldbtn_0ov"/>`,
		"fallback": "mdi:transfer",
	});
}

export default Component;
