import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_ka4sc6q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_ka4sc6q"/>`,
		"fallback": "entypo:signal",
	});
}

export default Component;
