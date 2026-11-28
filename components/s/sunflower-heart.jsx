import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlt3tyuxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlt3tyuxc"/>`,
		"fallback": "noviair-light:sunflower-heart",
	});
}

export default Component;
