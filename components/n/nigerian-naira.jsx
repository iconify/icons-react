import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihu8-ii_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihu8-ii_e"/>`,
		"fallback": "lucide:nigerian-naira",
	});
}

export default Component;
