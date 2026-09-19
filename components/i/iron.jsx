import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0kgj6bmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0kgj6bmy"/>`,
		"fallback": "icon-park-outline:iron",
	});
}

export default Component;
