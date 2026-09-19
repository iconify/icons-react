import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg-7l1u1i.css';
import '../../css/f/fua5fmpqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg-7l1u1i"/><path class="fua5fmpqt"/>`,
		"fallback": "ion:ios-person-add",
	});
}

export default Component;
