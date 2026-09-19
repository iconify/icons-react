import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5lrmtgqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5lrmtgqm"/>`,
		"fallback": "hugeicons:rotate-left-04",
	});
}

export default Component;
