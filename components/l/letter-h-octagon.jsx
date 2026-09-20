import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbzy___-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbzy___-y"/>`,
		"fallback": "mynaui:letter-h-octagon",
	});
}

export default Component;
