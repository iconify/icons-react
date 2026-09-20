import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tux5omtmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tux5omtmp"/>`,
		"fallback": "mdi:table-star",
	});
}

export default Component;
