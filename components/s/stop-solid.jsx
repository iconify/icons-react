import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf39ct00c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf39ct00c"/>`,
		"fallback": "iconaut:stop-solid",
	});
}

export default Component;
