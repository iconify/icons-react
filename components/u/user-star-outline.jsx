import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whed7za2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whed7za2n"/>`,
		"fallback": "mdi:user-star-outline",
	});
}

export default Component;
