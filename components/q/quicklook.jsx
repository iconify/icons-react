import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjqif3zmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjqif3zmm"/>`,
		"fallback": "thesvg-color:quicklook",
	});
}

export default Component;
