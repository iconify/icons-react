import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at6mhmmvf.css';
import '../../css/r/r258pibsk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at6mhmmvf"/><path class="r258pibsk"/>`,
		"fallback": "openmoji:red-triangle-pointed-down",
	});
}

export default Component;
