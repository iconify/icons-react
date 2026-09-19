import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn2kokbfe.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn2kokbfe"/>`,
		"fallback": "fontisto:payu",
	});
}

export default Component;
