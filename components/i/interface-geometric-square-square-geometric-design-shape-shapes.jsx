import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bse-cb6-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bse-cb6-t"/>`,
		"fallback": "streamline:interface-geometric-square-square-geometric-design-shape-shapes",
	});
}

export default Component;
