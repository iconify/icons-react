import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3i68y7an.css';

const viewBox = {"width":1022,"height":1010};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3i68y7an"/>`,
		"fallback": "whh:taskfreak",
	});
}

export default Component;
