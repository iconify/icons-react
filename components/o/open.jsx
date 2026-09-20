import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho73_5byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho73_5byz"/>`,
		"fallback": "majesticons:open",
	});
}

export default Component;
