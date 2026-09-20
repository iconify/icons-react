import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srbhv8gzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srbhv8gzm"/>`,
		"fallback": "ri:playstation-fill",
	});
}

export default Component;
