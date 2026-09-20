import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwus2bcyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwus2bcyf"/>`,
		"fallback": "mdi:numeric-8-boxes-outline",
	});
}

export default Component;
