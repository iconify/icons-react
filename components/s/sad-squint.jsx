import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc7-71b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc7-71b7n"/>`,
		"fallback": "uil:sad-squint",
	});
}

export default Component;
