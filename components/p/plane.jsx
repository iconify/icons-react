import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t96l2flpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t96l2flpb"/>`,
		"fallback": "typcn:plane",
	});
}

export default Component;
