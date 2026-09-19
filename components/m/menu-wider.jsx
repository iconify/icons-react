import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elchy0b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elchy0b0a"/>`,
		"fallback": "boxicons:menu-wider",
	});
}

export default Component;
