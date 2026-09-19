import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih7o_lvei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih7o_lvei"/>`,
		"fallback": "griddy-icons:loyalty-card-filled",
	});
}

export default Component;
