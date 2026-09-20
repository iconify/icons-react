import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfh0tyb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfh0tyb9x"/>`,
		"fallback": "ri:recycle-line",
	});
}

export default Component;
