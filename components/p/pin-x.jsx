import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv-8p8b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv-8p8b2d"/>`,
		"fallback": "noviair-light:pin-x",
	});
}

export default Component;
