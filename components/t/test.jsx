import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x98hq1byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x98hq1byo"/>`,
		"fallback": "tabler:test",
	});
}

export default Component;
