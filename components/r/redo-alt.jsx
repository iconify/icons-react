import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve2d88b1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve2d88b1g"/>`,
		"fallback": "fa-solid:redo-alt",
	});
}

export default Component;
