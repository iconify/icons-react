import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gthq0-bwv.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gthq0-bwv"/>`,
		"fallback": "jam:key-f",
	});
}

export default Component;
