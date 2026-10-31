import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh8rubmwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh8rubmwi"/>`,
		"fallback": "coolicons:table-plus-corner-round",
	});
}

export default Component;
