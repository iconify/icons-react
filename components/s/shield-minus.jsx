import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjvq1ybgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjvq1ybgq"/>`,
		"fallback": "mynaui:shield-minus",
	});
}

export default Component;
