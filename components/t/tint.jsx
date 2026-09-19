import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay13qzb4f.css';

const viewBox = {"width":770,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay13qzb4f"/>`,
		"fallback": "whh:tint",
	});
}

export default Component;
