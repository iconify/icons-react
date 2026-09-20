import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4jy4ac-z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4jy4ac-z"/>`,
		"fallback": "streamline:layout-window-1",
	});
}

export default Component;
