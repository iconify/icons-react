import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj6s_8m8d.css';

const viewBox = {"width":768,"height":976};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj6s_8m8d"/>`,
		"fallback": "simple-line-icons:social-pinterest",
	});
}

export default Component;
