import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4cc2sb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4cc2sb0m"/>`,
		"fallback": "withicons:square-dashed",
	});
}

export default Component;
