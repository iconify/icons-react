import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltgqwf-9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltgqwf-9l"/>`,
		"fallback": "mdi:unreal",
	});
}

export default Component;
