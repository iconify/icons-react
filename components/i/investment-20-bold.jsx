import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aodrq7bqi.css';
import '../../css/h/h4czgnbol.css';
import '../../css/q/qwggh7bvk.css';
import '../../css/r/rxk062bjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aodrq7bqi"/><path class="h4czgnbol"/><path class="qwggh7bvk"/><path class="rxk062bjj"/>`,
		"fallback": "energy-icons:investment-20-bold",
	});
}

export default Component;
