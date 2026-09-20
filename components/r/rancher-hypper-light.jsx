import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h38e-f2_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h38e-f2_b"/>`,
		"fallback": "selfhst:rancher-hypper-light",
	});
}

export default Component;
