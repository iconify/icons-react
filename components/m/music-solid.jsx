import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng45v9i7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng45v9i7x"/>`,
		"fallback": "mynaui:music-solid",
	});
}

export default Component;
