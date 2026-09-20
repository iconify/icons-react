import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mat8ltbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mat8ltbcx"/>`,
		"fallback": "thesvg-color:researchgate",
	});
}

export default Component;
