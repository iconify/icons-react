import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9yn4-b8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9yn4-b8e"/>`,
		"fallback": "selfhst:picoshare",
	});
}

export default Component;
