import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bba0mwb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bba0mwb9m"/>`,
		"fallback": "lucide:letter-w",
	});
}

export default Component;
