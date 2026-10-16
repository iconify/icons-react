import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz1qd9m1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz1qd9m1d"/>`,
		"fallback": "thesvg-color:memos-light",
	});
}

export default Component;
