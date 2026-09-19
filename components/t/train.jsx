import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2-lge2lf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2-lge2lf"/>`,
		"fallback": "fa7-solid:train",
	});
}

export default Component;
