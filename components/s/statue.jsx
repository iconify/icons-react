import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n93xt80dd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n93xt80dd"/>`,
		"fallback": "roentgen:statue",
	});
}

export default Component;
