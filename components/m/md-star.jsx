import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3nt_n9qz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3nt_n9qz"/>`,
		"fallback": "ion:md-star",
	});
}

export default Component;
