import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0o05e1wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0o05e1wo"/>`,
		"fallback": "proicons:play",
	});
}

export default Component;
