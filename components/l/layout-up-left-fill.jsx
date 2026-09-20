import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt_s0ux-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt_s0ux-g"/>`,
		"fallback": "mage:layout-up-left-fill",
	});
}

export default Component;
