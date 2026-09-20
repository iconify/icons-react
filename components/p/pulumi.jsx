import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0pp9_tey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0pp9_tey"/>`,
		"fallback": "simple-icons:pulumi",
	});
}

export default Component;
