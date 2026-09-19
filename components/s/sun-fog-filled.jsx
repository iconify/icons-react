import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2j8i59bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2j8i59bg"/>`,
		"fallback": "boxicons:sun-fog-filled",
	});
}

export default Component;
