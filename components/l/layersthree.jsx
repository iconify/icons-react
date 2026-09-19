import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkx1agbcu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkx1agbcu"/>`,
		"fallback": "whh:layersthree",
	});
}

export default Component;
