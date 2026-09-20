import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mset3p40f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mset3p40f"/>`,
		"fallback": "thesvg-color:spectrum",
	});
}

export default Component;
