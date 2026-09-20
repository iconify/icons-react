import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo60o6k2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo60o6k2u"/>`,
		"fallback": "lucide:phone-off",
	});
}

export default Component;
