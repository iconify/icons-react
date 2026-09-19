import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rob-th-6g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rob-th-6g"/>`,
		"fallback": "entypo:loop",
	});
}

export default Component;
