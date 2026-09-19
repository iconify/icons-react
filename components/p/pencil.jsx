import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6gu57b1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6gu57b1c"/>`,
		"fallback": "icon-park-outline:pencil",
	});
}

export default Component;
