import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9dt598cv.css';
import '../../css/t/t3c_y_tvs.css';
import '../../css/j/janp2_10w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9dt598cv"/><path class="t3c_y_tvs"/><path class="janp2_10w"/>`,
		"fallback": "energy-icons:trophy-20",
	});
}

export default Component;
