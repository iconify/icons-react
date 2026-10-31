import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b15u4emsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b15u4emsv"/>`,
		"fallback": "coolicons:square-more-vertical-fill-round",
	});
}

export default Component;
