import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj3uxq5jh.css';
import '../../css/i/ibxo5zbky.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj3uxq5jh"/><path class="ibxo5zbky"/>`,
		"fallback": "openmoji:raised-hand",
	});
}

export default Component;
