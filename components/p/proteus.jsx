import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vba71sb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vba71sb7o"/>`,
		"fallback": "thesvg-color:proteus",
	});
}

export default Component;
