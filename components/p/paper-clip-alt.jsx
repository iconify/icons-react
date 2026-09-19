import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y68fl5rto.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y68fl5rto"/>`,
		"fallback": "el:paper-clip-alt",
	});
}

export default Component;
