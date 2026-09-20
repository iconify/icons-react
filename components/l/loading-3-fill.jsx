import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2jo_5btr.css';
import '../../css/m/muf1bphxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f2jo_5btr"/><path class="muf1bphxu"/>`,
		"fallback": "mingcute:loading-3-fill",
	});
}

export default Component;
