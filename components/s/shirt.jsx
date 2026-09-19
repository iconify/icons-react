import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8l0oobdd.css';
import '../../css/w/wg3u04byh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8l0oobdd"/><path class="wg3u04byh"/>`,
		"fallback": "ion:shirt",
	});
}

export default Component;
