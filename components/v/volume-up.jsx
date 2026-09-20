import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p39g-b1jw.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p39g-b1jw"/>`,
		"fallback": "wpf:volume-up",
	});
}

export default Component;
