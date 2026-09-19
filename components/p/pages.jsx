import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puz4ss72c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puz4ss72c"/>`,
		"fallback": "gridicons:pages",
	});
}

export default Component;
