import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r39_0xs4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r39_0xs4a"/>`,
		"fallback": "griddy-icons:trophy",
	});
}

export default Component;
