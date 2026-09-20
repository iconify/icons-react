import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4g3nf-bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4g3nf-bj"/>`,
		"fallback": "majesticons:mail-line",
	});
}

export default Component;
