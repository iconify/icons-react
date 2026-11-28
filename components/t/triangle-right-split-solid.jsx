import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlnsih4bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlnsih4bt"/>`,
		"fallback": "iconaut:triangle-right-split-solid",
	});
}

export default Component;
