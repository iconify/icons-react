import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmivc1y4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmivc1y4r"/>`,
		"fallback": "noviair:user-circle-info",
	});
}

export default Component;
