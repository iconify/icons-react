import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq92tblux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq92tblux"/>`,
		"fallback": "ri:loop-left-line",
	});
}

export default Component;
