import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy_j258tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy_j258tn"/>`,
		"fallback": "keyline-icons:shield-minus",
	});
}

export default Component;
