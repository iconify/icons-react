import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvhs1ebco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvhs1ebco"/>`,
		"fallback": "mingcute:spatula-line",
	});
}

export default Component;
