import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4s6s33fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4s6s33fq"/>`,
		"fallback": "tabler:octagon",
	});
}

export default Component;
