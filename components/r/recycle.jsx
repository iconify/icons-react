import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vexk7p94v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vexk7p94v"/>`,
		"fallback": "fa-solid:recycle",
	});
}

export default Component;
