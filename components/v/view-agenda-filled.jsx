import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp_rzwbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp_rzwbpp"/>`,
		"fallback": "tdesign:view-agenda-filled",
	});
}

export default Component;
