import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqrdfccbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqrdfccbw"/>`,
		"fallback": "mdi:radiation",
	});
}

export default Component;
