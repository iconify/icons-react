import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgs12i4vt.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgs12i4vt"/>`,
		"fallback": "foundation:marker",
	});
}

export default Component;
