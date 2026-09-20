import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwcfi3o_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwcfi3o_b"/>`,
		"fallback": "mingcute:trophy-line",
	});
}

export default Component;
