import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyx_jbcae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyx_jbcae"/>`,
		"fallback": "fa6-solid:street-view",
	});
}

export default Component;
