import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an-s6zb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an-s6zb2g"/>`,
		"fallback": "mono-icons:unlock",
	});
}

export default Component;
