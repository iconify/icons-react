import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbq3xlb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbq3xlb_n"/>`,
		"fallback": "thesvg-color:jfrog",
	});
}

export default Component;
