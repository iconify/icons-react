import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0g1dmd3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0g1dmd3m"/>`,
		"fallback": "coolicons:trending-down-round",
	});
}

export default Component;
