import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn3l1bc2i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn3l1bc2i"/>`,
		"fallback": "streamline-flex:street-sign",
	});
}

export default Component;
