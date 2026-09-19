import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_5p8ly8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_5p8ly8s"/>`,
		"fallback": "fa-solid:user-alt",
	});
}

export default Component;
