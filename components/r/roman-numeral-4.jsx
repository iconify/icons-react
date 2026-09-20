import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf9kgebwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf9kgebwf"/>`,
		"fallback": "mdi:roman-numeral-4",
	});
}

export default Component;
