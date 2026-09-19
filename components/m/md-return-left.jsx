import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks6dkibpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks6dkibpz"/>`,
		"fallback": "ion:md-return-left",
	});
}

export default Component;
