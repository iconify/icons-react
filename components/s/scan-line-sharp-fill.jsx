import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc_2yj9om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc_2yj9om"/>`,
		"fallback": "keyline-icons:scan-line-sharp-fill",
	});
}

export default Component;
