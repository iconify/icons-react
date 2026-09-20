import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ics67bbht.css';

const viewBox = {"width":1545,"height":1151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ics67bbht"/>`,
		"fallback": "thesvg-color:onex",
	});
}

export default Component;
