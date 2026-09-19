import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iejg9x5ez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iejg9x5ez"/>`,
		"fallback": "ion:md-build",
	});
}

export default Component;
