import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb085db6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb085db6c"/>`,
		"fallback": "token:sidus",
	});
}

export default Component;
