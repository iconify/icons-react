import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfsbn3c_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfsbn3c_h"/>`,
		"fallback": "cbi:reolink-811",
	});
}

export default Component;
