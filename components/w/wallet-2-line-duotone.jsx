import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nomdrxbld.css';
import '../../css/z/z8j9m1bjy.css';
import '../../css/g/gdtht-o7n.css';
import '../../css/g/gzu3vyboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nomdrxbld"/><path class="z8j9m1bjy"/><path class="gdtht-o7n"/><path class="gzu3vyboy"/></g>`,
		"fallback": "solar:wallet-2-line-duotone",
	});
}

export default Component;
