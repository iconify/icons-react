import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-tz32b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-tz32b4k"/>`,
		"fallback": "simple-icons:jss",
	});
}

export default Component;
