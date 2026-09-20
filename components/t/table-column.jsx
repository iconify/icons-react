import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgmrll23v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgmrll23v"/>`,
		"fallback": "tabler:table-column",
	});
}

export default Component;
