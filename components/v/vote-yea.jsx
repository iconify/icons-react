import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq4vmr3hb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq4vmr3hb"/>`,
		"fallback": "fa-solid:vote-yea",
	});
}

export default Component;
