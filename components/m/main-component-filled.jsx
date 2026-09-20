import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxbyoqb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxbyoqb_h"/>`,
		"fallback": "reicon:main-component-filled",
	});
}

export default Component;
