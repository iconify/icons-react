import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo9gcnbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo9gcnbpd"/>`,
		"fallback": "mdi:sort-date-ascending",
	});
}

export default Component;
