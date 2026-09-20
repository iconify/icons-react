import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6c8p4bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6c8p4bwg"/>`,
		"fallback": "mdi:swap-driving-apps-wheel",
	});
}

export default Component;
