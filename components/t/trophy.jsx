import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9n0nyb5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9n0nyb5m"/>`,
		"fallback": "zondicons:trophy",
	});
}

export default Component;
