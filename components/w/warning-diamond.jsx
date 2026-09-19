import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvl9v5b9e.css';
import '../../css/o/oqfk99ban.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvl9v5b9e"/><path class="oqfk99ban"/>`,
		"fallback": "carbon:warning-diamond",
	});
}

export default Component;
