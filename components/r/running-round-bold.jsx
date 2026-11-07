import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp8lrpbea.css';
import '../../css/i/isx_b_b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp8lrpbea"/><path clip-rule="evenodd" class="isx_b_b0w"/>`,
		"fallback": "solar:running-round-bold",
	});
}

export default Component;
