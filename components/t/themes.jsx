import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngv5_zdhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngv5_zdhp"/>`,
		"fallback": "gridicons:themes",
	});
}

export default Component;
