import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6j4ececu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6j4ececu"/>`,
		"fallback": "tabler:layout-align-bottom",
	});
}

export default Component;
