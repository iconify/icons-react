import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhx89lryx.css';
import '../../css/r/r07ubeb7t.css';
import '../../css/d/d6b0ntifu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhx89lryx"/><path class="r07ubeb7t"/><path class="d6b0ntifu"/>`,
		"fallback": "energy-icons:smart-charging-20",
	});
}

export default Component;
