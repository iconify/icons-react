import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0ji79b-o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p0ji79b-o"/>`,
		"fallback": "streamline:smiley-angry-solid",
	});
}

export default Component;
