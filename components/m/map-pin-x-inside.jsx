import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg5wtwb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg5wtwb9f"/>`,
		"fallback": "lucide:map-pin-x-inside",
	});
}

export default Component;
