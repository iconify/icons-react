import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vesf7-b_g.css';
import '../../css/h/h_auobb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vesf7-b_g"/><path class="h_auobb8g"/>`,
		"fallback": "streamline-pixel:internet-network-download",
	});
}

export default Component;
