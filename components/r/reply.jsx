import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hio1l1djh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hio1l1djh"/>`,
		"fallback": "entypo:reply",
	});
}

export default Component;
