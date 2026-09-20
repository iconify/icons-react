import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg6v_r6gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg6v_r6gv"/>`,
		"fallback": "uil:silence",
	});
}

export default Component;
