import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v74qen_bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v74qen_bm"/>`,
		"fallback": "mynaui:tent-tree",
	});
}

export default Component;
