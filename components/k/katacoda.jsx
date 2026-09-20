import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfr02dbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfr02dbea"/>`,
		"fallback": "simple-icons:katacoda",
	});
}

export default Component;
