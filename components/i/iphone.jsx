import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6_rr2b4o.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6_rr2b4o"/>`,
		"fallback": "wpf:iphone",
	});
}

export default Component;
