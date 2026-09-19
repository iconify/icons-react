import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1phgbceq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1phgbceq"/>`,
		"fallback": "fa6-solid:scale-balanced",
	});
}

export default Component;
