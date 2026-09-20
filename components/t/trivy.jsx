import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd8mp04wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd8mp04wh"/>`,
		"fallback": "thesvg-color:trivy",
	});
}

export default Component;
