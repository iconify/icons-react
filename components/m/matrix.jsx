import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqz1v_bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqz1v_bkk"/>`,
		"fallback": "tabler:matrix",
	});
}

export default Component;
