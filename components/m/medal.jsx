import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf_8c0wnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf_8c0wnr"/>`,
		"fallback": "bxs:medal",
	});
}

export default Component;
