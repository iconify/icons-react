import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbpnb1b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbpnb1b6n"/>`,
		"fallback": "lucide:rows-2-plus-bottom",
	});
}

export default Component;
