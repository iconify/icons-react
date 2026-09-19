import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x55m2-bxj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x55m2-bxj"/>`,
		"fallback": "entypo:mouse",
	});
}

export default Component;
