import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6jhh5tia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6jhh5tia"/>`,
		"fallback": "entypo:vinyl",
	});
}

export default Component;
