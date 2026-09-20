import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbdst0b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbdst0b-w"/>`,
		"fallback": "mdi:pyramid-off",
	});
}

export default Component;
