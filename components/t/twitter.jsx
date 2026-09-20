import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnzj65beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnzj65beh"/>`,
		"fallback": "mage:twitter",
	});
}

export default Component;
