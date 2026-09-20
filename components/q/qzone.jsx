import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb2l4ubgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb2l4ubgs"/>`,
		"fallback": "simple-icons:qzone",
	});
}

export default Component;
