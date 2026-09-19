import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmkmzzb8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmkmzzb8m"/>`,
		"fallback": "ion:md-clipboard",
	});
}

export default Component;
