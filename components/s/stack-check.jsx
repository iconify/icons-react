import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im-q8rvxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im-q8rvxj"/>`,
		"fallback": "tabler:stack-check",
	});
}

export default Component;
