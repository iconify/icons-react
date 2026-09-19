import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu5xwibvu.css';
import '../../css/n/nswg25bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu5xwibvu"/><path class="nswg25bfm"/>`,
		"fallback": "boxicons:street-view-filled",
	});
}

export default Component;
