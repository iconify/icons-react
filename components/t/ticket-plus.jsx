import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe8bcf4ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe8bcf4ev"/>`,
		"fallback": "lucide:ticket-plus",
	});
}

export default Component;
