import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6kj947-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6kj947-r"/>`,
		"fallback": "ion:plus-round",
	});
}

export default Component;
