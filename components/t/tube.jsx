import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzao40b2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzao40b2g"/>`,
		"fallback": "pinhead:tube",
	});
}

export default Component;
