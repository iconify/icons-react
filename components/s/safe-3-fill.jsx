import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzzgo7biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzzgo7biz"/>`,
		"fallback": "ri:safe-3-fill",
	});
}

export default Component;
