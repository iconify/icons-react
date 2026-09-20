import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odnm3i3de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odnm3i3de"/>`,
		"fallback": "reicon:ticket-discount",
	});
}

export default Component;
