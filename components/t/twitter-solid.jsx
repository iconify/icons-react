import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf3y0_dgj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf3y0_dgj"/>`,
		"fallback": "teenyicons:twitter-solid",
	});
}

export default Component;
