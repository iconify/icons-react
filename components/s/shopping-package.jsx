import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgki4y25j.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgki4y25j"/>`,
		"fallback": "fontisto:shopping-package",
	});
}

export default Component;
