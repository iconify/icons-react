import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7fsz4yye.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7fsz4yye"/>`,
		"fallback": "entypo:sports-club",
	});
}

export default Component;
