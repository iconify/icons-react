import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlb75okwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlb75okwg"/>`,
		"fallback": "mdi:seat-legroom-reduced",
	});
}

export default Component;
