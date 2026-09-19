import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs2wmdbsr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs2wmdbsr"/>`,
		"fallback": "fa6-solid:person-walking-arrow-loop-left",
	});
}

export default Component;
