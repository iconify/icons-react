import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sspydq7vo.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sspydq7vo"/>`,
		"fallback": "whh:timeline",
	});
}

export default Component;
