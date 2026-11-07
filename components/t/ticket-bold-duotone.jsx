import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3oem8bbx.css';
import '../../css/x/x_l41xukd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i3oem8bbx"/><path class="x_l41xukd"/>`,
		"fallback": "solar:ticket-bold-duotone",
	});
}

export default Component;
