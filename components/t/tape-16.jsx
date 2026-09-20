import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsv0algms.css';
import '../../css/i/i3h9pj49l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hsv0algms"/><path clip-rule="evenodd" class="i3h9pj49l"/>`,
		"fallback": "qlementine-icons:tape-16",
	});
}

export default Component;
