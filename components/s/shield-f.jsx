import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2pv8ibcv.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2pv8ibcv"/>`,
		"fallback": "jam:shield-f",
	});
}

export default Component;
