import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj84wmbsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj84wmbsr"/>`,
		"fallback": "selfhst:olivetin-dark",
	});
}

export default Component;
