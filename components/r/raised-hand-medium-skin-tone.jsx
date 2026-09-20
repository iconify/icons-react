import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tog4lq7vv.css';
import '../../css/i/ibxo5zbky.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tog4lq7vv"/><path class="ibxo5zbky"/>`,
		"fallback": "openmoji:raised-hand-medium-skin-tone",
	});
}

export default Component;
