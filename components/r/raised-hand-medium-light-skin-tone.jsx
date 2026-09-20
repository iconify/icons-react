import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erj9ywj_a.css';
import '../../css/i/ibxo5zbky.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erj9ywj_a"/><path class="ibxo5zbky"/>`,
		"fallback": "openmoji:raised-hand-medium-light-skin-tone",
	});
}

export default Component;
