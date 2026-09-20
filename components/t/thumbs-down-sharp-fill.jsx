import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl6u6_7vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl6u6_7vh"/>`,
		"fallback": "keyline-icons:thumbs-down-sharp-fill",
	});
}

export default Component;
