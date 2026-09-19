import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uooe_ab7h.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uooe_ab7h"/>`,
		"fallback": "fa6-solid:virus-covid-slash",
	});
}

export default Component;
