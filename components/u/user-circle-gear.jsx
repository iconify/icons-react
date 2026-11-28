import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp40cv00c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp40cv00c"/>`,
		"fallback": "noviair:user-circle-gear",
	});
}

export default Component;
