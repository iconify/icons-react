import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzv9-9rfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzv9-9rfp"/>`,
		"fallback": "noviair:messages-x",
	});
}

export default Component;
