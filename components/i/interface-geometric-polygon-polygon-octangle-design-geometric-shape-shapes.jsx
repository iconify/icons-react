import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdf-s7bzm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdf-s7bzm"/>`,
		"fallback": "streamline:interface-geometric-polygon-polygon-octangle-design-geometric-shape-shapes",
	});
}

export default Component;
