import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buan6_edz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buan6_edz"/>`,
		"fallback": "si:rupee-duotone",
	});
}

export default Component;
