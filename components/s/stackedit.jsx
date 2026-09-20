import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz33170rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz33170rj"/>`,
		"fallback": "thesvg-color:stackedit",
	});
}

export default Component;
