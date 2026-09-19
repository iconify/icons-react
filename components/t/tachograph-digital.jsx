import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brv3fxbyp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brv3fxbyp"/>`,
		"fallback": "fa6-solid:tachograph-digital",
	});
}

export default Component;
