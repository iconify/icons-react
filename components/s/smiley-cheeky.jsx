import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhs37gbzw.css';
import '../../css/e/ezc6ubmmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhs37gbzw"/><path class="ezc6ubmmo"/>`,
		"fallback": "streamline-freehand:smiley-cheeky",
	});
}

export default Component;
