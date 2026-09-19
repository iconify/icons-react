import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9_-f5bkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9_-f5bkt"/>`,
		"fallback": "cib:shazam",
	});
}

export default Component;
