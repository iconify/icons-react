import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag8vmcb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag8vmcb-e"/>`,
		"fallback": "coolicons:toggle-left-fill-round",
	});
}

export default Component;
