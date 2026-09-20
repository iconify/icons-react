import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utgo1x16x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utgo1x16x"/>`,
		"fallback": "mdi:pub-outline",
	});
}

export default Component;
