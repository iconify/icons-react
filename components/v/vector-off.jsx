import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbvf0ch1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbvf0ch1t"/>`,
		"fallback": "tabler:vector-off",
	});
}

export default Component;
