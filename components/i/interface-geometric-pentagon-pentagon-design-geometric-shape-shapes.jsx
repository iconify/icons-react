import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eofsyybwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eofsyybwr"/>`,
		"fallback": "streamline:interface-geometric-pentagon-pentagon-design-geometric-shape-shapes",
	});
}

export default Component;
