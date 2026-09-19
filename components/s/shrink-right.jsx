import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic7rc9bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic7rc9bjp"/>`,
		"fallback": "boxicons:shrink-right",
	});
}

export default Component;
