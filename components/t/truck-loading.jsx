import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s07h84bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s07h84bpw"/>`,
		"fallback": "uil:truck-loading",
	});
}

export default Component;
