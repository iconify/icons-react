import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9hu57n-u.css';
import '../../css/o/oll-isblm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9hu57n-u"/><path clip-rule="evenodd" class="oll-isblm"/>`,
		"fallback": "qlementine-icons:spam-12",
	});
}

export default Component;
