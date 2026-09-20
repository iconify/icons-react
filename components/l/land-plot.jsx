import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xt5ak_ifm.css';
import '../../css/e/e9_6ycqau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xt5ak_ifm"/><path class="e9_6ycqau"/></g>`,
		"fallback": "lucide:land-plot",
	});
}

export default Component;
