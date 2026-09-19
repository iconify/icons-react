import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwqanrbaz.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwqanrbaz"/>`,
		"fallback": "fa:user",
	});
}

export default Component;
