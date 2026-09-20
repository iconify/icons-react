import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqka1bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgqka1bef"/>`,
		"fallback": "reicon:three-d-cube-filled",
	});
}

export default Component;
