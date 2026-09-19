import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk5gs5b_o.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk5gs5b_o"/>`,
		"fallback": "fa6-solid:ranking-star",
	});
}

export default Component;
