import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4v_j9b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4v_j9b_e"/>`,
		"fallback": "reicon:wand3-filled",
	});
}

export default Component;
