import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltuu1s2eo.css';
import '../../css/q/qu5j37bnx.css';
import '../../css/b/bg_cubciy.css';

const viewBox = {"width":122.5,"height":122.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltuu1s2eo"/><path class="qu5j37bnx"/><path class="bg_cubciy"/>`,
		"fallback": "thesvg-color:kubevela-light",
	});
}

export default Component;
