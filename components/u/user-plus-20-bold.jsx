import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/algwq4ehk.css';
import '../../css/l/ll6ph0b-z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="algwq4ehk"/><path class="ll6ph0b-z"/>`,
		"fallback": "energy-icons:user-plus-20-bold",
	});
}

export default Component;
