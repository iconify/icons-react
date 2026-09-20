import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp7d7ipnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp7d7ipnv"/>`,
		"fallback": "mdi:phone-log-outline",
	});
}

export default Component;
