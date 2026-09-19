import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-5zwwbtw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-5zwwbtw"/>`,
		"fallback": "entypo:quote",
	});
}

export default Component;
