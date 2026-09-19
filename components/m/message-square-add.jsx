import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi-epnm2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi-epnm2v"/>`,
		"fallback": "bxs:message-square-add",
	});
}

export default Component;
