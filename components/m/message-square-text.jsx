import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzdhmac2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzdhmac2d"/>`,
		"fallback": "lucide:message-square-text",
	});
}

export default Component;
