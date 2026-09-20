import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sks34e18g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sks34e18g"/>`,
		"fallback": "mage:star-moving",
	});
}

export default Component;
