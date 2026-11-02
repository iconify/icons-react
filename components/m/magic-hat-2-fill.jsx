import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqqx58b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqqx58b0g"/>`,
		"fallback": "mingcute:magic-hat-2-fill",
	});
}

export default Component;
