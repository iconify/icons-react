import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt6k4ej1w.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt6k4ej1w"/>`,
		"fallback": "jam:smiley-f",
	});
}

export default Component;
