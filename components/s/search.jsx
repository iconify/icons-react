import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsf58_ncg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsf58_ncg"/>`,
		"fallback": "ix:search",
	});
}

export default Component;
