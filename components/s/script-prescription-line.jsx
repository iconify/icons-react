import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py-135qpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py-135qpl"/>`,
		"fallback": "majesticons:script-prescription-line",
	});
}

export default Component;
