import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r9-lei5up.css';
import '../../css/h/hh5pf1hma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="r9-lei5up"/><path class="hh5pf1hma"/></g>`,
		"fallback": "iconamoon:location-pin-thin",
	});
}

export default Component;
