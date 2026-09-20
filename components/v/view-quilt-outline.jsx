import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmz1f45_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmz1f45_k"/>`,
		"fallback": "mdi:view-quilt-outline",
	});
}

export default Component;
