import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcrc-8b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcrc-8b3b"/>`,
		"fallback": "octicon:sponsor-tiers-24",
	});
}

export default Component;
