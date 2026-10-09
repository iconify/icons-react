import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbg6sqfhk.css';
import '../../css/q/qb-anoa-e.css';
import '../../css/t/tnt8cd_0v.css';
import '../../css/s/sm5mxobst.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbg6sqfhk"/><path class="qb-anoa-e"/><path class="tnt8cd_0v"/><path class="sm5mxobst"/>`,
		"fallback": "energy-icons:pizza-oven-20-bold",
	});
}

export default Component;
