import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ztgtcnl.css';
import '../../css/o/omzx56fzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ztgtcnl"/><path class="omzx56fzt"/>`,
		"fallback": "streamline-freehand:smiley-blush",
	});
}

export default Component;
