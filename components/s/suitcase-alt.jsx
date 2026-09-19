import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgirl4yno.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgirl4yno"/>`,
		"fallback": "fontisto:suitcase-alt",
	});
}

export default Component;
