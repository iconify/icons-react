import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rza0_sbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rza0_sbel"/>`,
		"fallback": "noviair-light:keyboard",
	});
}

export default Component;
