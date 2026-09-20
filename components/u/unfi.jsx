import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejk70mm4e.css';
import '../../css/a/agnov_a2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejk70mm4e"/><path class="agnov_a2j"/>`,
		"fallback": "token:unfi",
	});
}

export default Component;
