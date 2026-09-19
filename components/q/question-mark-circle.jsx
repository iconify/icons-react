import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyhf-2_bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyhf-2_bh"/>`,
		"fallback": "heroicons:question-mark-circle",
	});
}

export default Component;
