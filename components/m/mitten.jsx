import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2co7ri_c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2co7ri_c"/>`,
		"fallback": "fa7-solid:mitten",
	});
}

export default Component;
