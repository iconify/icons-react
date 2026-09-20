import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlc3m7bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlc3m7bll"/>`,
		"fallback": "thesvg:lot-polish-airlines",
	});
}

export default Component;
