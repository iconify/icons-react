import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jksb1yr8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jksb1yr8c"/>`,
		"fallback": "lucide:stroke-line-join-round",
	});
}

export default Component;
