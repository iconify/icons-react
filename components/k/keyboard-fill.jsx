import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/habq1_bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="habq1_bvu"/>`,
		"fallback": "ri:keyboard-fill",
	});
}

export default Component;
