import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwhcp7rhy.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwhcp7rhy"/>`,
		"fallback": "fontisto:propeller-3",
	});
}

export default Component;
