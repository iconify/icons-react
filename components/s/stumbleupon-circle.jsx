import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv2_p-9yo.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv2_p-9yo"/>`,
		"fallback": "fa6-brands:stumbleupon-circle",
	});
}

export default Component;
