import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sndodubfo.css';
import '../../css/a/a4nkfj3oj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sndodubfo"/><path class="a4nkfj3oj"/>`,
		"fallback": "selfhst:phpsysinfo-dark",
	});
}

export default Component;
