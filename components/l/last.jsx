import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3z5x8z7l.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3z5x8z7l"/>`,
		"fallback": "wpf:last",
	});
}

export default Component;
