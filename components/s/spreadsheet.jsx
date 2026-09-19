import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ars6nmb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ars6nmb6k"/>`,
		"fallback": "bxs:spreadsheet",
	});
}

export default Component;
