import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9s-4iwjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9s-4iwjh"/>`,
		"fallback": "si:more-muted-vert-circle-line",
	});
}

export default Component;
