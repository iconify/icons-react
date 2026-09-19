import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6ccxni9z.css';
import '../../css/i/iz9zsdbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6ccxni9z"/><path class="iz9zsdbsl"/>`,
		"fallback": "bx:money-withdraw",
	});
}

export default Component;
