import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv62uor1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv62uor1a"/>`,
		"fallback": "si:sign-in-alt-duotone",
	});
}

export default Component;
