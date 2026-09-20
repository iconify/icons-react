import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdzl840ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdzl840ov"/>`,
		"fallback": "mynaui:shield-slash",
	});
}

export default Component;
