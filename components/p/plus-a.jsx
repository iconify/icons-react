import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et57vxgoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et57vxgoa"/>`,
		"fallback": "fontisto:plus-a",
	});
}

export default Component;
