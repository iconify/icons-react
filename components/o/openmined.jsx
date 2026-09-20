import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxtpv0web.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxtpv0web"/>`,
		"fallback": "thesvg-color:openmined",
	});
}

export default Component;
