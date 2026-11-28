import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mei2r4bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mei2r4bmb"/>`,
		"fallback": "noviair:palette-plus",
	});
}

export default Component;
