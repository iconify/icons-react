import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgd2dpqcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgd2dpqcw"/>`,
		"fallback": "mynaui:pizza",
	});
}

export default Component;
