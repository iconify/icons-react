import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgx4_lb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tgx4_lb9l"/>`,
		"fallback": "griddy-icons:phone-off",
	});
}

export default Component;
