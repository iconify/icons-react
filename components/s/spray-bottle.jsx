import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsaq0vbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsaq0vbdd"/>`,
		"fallback": "mdi:spray-bottle",
	});
}

export default Component;
