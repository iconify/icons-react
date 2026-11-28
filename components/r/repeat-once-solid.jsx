import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4ikh4a_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4ikh4a_c"/>`,
		"fallback": "iconaut:repeat-once-solid",
	});
}

export default Component;
