import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riwve-viw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riwve-viw"/>`,
		"fallback": "uil:plus-circle",
	});
}

export default Component;
