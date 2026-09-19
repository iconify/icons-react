import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr4flk_qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr4flk_qf"/>`,
		"fallback": "ci:long-up-left",
	});
}

export default Component;
