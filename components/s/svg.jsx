import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns92qbcwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns92qbcwl"/>`,
		"fallback": "tabler:svg",
	});
}

export default Component;
