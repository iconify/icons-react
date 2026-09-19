import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbylo6bkf.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbylo6bkf"/>`,
		"fallback": "fontisto:recycle",
	});
}

export default Component;
