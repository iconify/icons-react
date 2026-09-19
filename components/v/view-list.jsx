import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehw5kccqx.css';
import '../../css/i/irv3-cbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehw5kccqx"/><path class="irv3-cbsy"/>`,
		"fallback": "circum:view-list",
	});
}

export default Component;
