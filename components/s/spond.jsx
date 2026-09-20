import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxken_pcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxken_pcx"/>`,
		"fallback": "thesvg-color:spond",
	});
}

export default Component;
