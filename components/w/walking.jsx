import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jve6oc-3s.css';

const viewBox = {"width":500,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jve6oc-3s"/>`,
		"fallback": "ls:walking",
	});
}

export default Component;
