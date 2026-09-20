import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nba_ijb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nba_ijb9p"/>`,
		"fallback": "lucide:map-pin-plus-inside",
	});
}

export default Component;
