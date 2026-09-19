import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odb6au6vj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odb6au6vj"/>`,
		"fallback": "ion:md-happy",
	});
}

export default Component;
