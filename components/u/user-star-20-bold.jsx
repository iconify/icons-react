import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd5rvwmxt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd5rvwmxt"/>`,
		"fallback": "energy-icons:user-star-20-bold",
	});
}

export default Component;
