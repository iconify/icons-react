import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmj5g9btx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmj5g9btx"/>`,
		"fallback": "wpf:viewfile",
	});
}

export default Component;
