import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bda7mub-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bda7mub-p"/>`,
		"fallback": "boxicons:path",
	});
}

export default Component;
