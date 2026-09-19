import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2cs58beo.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2cs58beo"/>`,
		"fallback": "whh:script",
	});
}

export default Component;
