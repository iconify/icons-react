import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evm6bqe-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evm6bqe-x"/>`,
		"fallback": "selfhst:newsblur-dark",
	});
}

export default Component;
