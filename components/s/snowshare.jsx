import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0c9q5kao.css';
import '../../css/y/y4llj8bzo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0c9q5kao"/><path class="y4llj8bzo"/>`,
		"fallback": "selfhst:snowshare",
	});
}

export default Component;
