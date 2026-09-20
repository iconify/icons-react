import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs5c1cbwx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs5c1cbwx"/>`,
		"fallback": "streamline:interface-geometric-triangle-geometric-triangle-shape-design-shapes",
	});
}

export default Component;
