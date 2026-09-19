import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbatymjye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbatymjye"/>`,
		"fallback": "boxicons:right-angle-triangle-half",
	});
}

export default Component;
