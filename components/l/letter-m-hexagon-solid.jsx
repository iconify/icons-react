import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akyw0sb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akyw0sb5x"/>`,
		"fallback": "mynaui:letter-m-hexagon-solid",
	});
}

export default Component;
