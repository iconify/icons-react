import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzq2i_09v.css';

const viewBox = {"width":462.9,"height":462.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzq2i_09v"/>`,
		"fallback": "selfhst:intervals-icu-dark",
	});
}

export default Component;
