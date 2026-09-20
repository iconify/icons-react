import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcc_rg86w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcc_rg86w"/>`,
		"fallback": "ri:water-flash-fill",
	});
}

export default Component;
