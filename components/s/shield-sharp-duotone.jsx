import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0du8hobj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0du8hobj"/>`,
		"fallback": "keyline-icons:shield-sharp-duotone",
	});
}

export default Component;
