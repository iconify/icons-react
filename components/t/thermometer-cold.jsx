import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sal356e5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sal356e5s"/>`,
		"fallback": "hugeicons:thermometer-cold",
	});
}

export default Component;
