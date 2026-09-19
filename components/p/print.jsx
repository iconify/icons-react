import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv5412blu.css';

const viewBox = {"width":717,"height":683};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv5412blu"/>`,
		"fallback": "ls:print",
	});
}

export default Component;
