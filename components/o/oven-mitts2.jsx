import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw_8thb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vw_8thb5h"/>`,
		"fallback": "reicon:oven-mitts2",
	});
}

export default Component;
