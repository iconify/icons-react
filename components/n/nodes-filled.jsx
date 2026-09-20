import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uea_xyb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uea_xyb8w"/>`,
		"fallback": "reicon:nodes-filled",
	});
}

export default Component;
