import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi-d3bcqw.css';
import '../../css/t/t0gc7texs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi-d3bcqw"/><path class="t0gc7texs"/>`,
		"fallback": "energy-icons:rabbit-20-bold",
	});
}

export default Component;
