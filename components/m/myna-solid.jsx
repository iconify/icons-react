import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw3q26qvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw3q26qvx"/>`,
		"fallback": "mynaui:myna-solid",
	});
}

export default Component;
