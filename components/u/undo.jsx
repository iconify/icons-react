import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7vz9wb9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7vz9wb9j"/>`,
		"fallback": "fa-solid:undo",
	});
}

export default Component;
