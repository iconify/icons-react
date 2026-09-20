import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr44mmb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr44mmb_g"/>`,
		"fallback": "mingcute:snowboarding-line",
	});
}

export default Component;
