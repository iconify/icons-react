import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv47dnbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv47dnbtm"/>`,
		"fallback": "tabler:square-rounded-number-1-filled",
	});
}

export default Component;
