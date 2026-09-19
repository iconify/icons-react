import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldoycb-o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldoycb-o"/>`,
		"fallback": "fa7-regular:truck",
	});
}

export default Component;
