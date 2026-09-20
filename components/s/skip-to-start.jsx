import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z16tn7gsn.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z16tn7gsn"/>`,
		"fallback": "wpf:skip-to-start",
	});
}

export default Component;
