import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd-q15bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd-q15bid"/>`,
		"fallback": "ri:target-fill",
	});
}

export default Component;
