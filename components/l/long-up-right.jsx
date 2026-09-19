import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktyj-1b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktyj-1b6o"/>`,
		"fallback": "ci:long-up-right",
	});
}

export default Component;
