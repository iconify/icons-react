import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvxu01krm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvxu01krm"/>`,
		"fallback": "glyphs:triangle-bold",
	});
}

export default Component;
