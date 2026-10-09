import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h77o0gzdy.css';
import '../../css/u/uh9wjbc8d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h77o0gzdy"/><path class="uh9wjbc8d"/>`,
		"fallback": "energy-icons:mug-20",
	});
}

export default Component;
