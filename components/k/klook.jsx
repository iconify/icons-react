import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6x368b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6x368b9h"/>`,
		"fallback": "thesvg:klook",
	});
}

export default Component;
