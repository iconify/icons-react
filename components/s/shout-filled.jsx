import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esdlk943g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esdlk943g"/>`,
		"fallback": "ix:shout-filled",
	});
}

export default Component;
