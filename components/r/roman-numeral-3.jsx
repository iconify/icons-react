import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1m9nwbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1m9nwbqu"/>`,
		"fallback": "mdi:roman-numeral-3",
	});
}

export default Component;
