import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f849z9lwr.css';
import '../../css/t/tii820b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f849z9lwr"/><path clip-rule="evenodd" class="tii820b4e"/>`,
		"fallback": "qlementine-icons:sort-time-asc-24",
	});
}

export default Component;
