import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csg993q7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csg993q7s"/>`,
		"fallback": "mdi:set-left",
	});
}

export default Component;
