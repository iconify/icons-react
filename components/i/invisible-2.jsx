import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5u7_dbto.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5u7_dbto"/>`,
		"fallback": "streamline:invisible-2",
	});
}

export default Component;
