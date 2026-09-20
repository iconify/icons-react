import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzx2cnbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzx2cnbdo"/>`,
		"fallback": "mynaui:nine",
	});
}

export default Component;
