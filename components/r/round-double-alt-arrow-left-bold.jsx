import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0ahrne_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v0ahrne_p"/>`,
		"fallback": "solar:round-double-alt-arrow-left-bold",
	});
}

export default Component;
