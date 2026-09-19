import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obhljr3lk.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obhljr3lk"/>`,
		"fallback": "fa6-solid:thumbtack-slash",
	});
}

export default Component;
