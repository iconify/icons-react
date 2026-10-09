import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3_ihpb5f.css';
import '../../css/d/d3xqtkb1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3_ihpb5f"/><path class="d3xqtkb1l"/>`,
		"fallback": "energy-icons:rotate-cw-20-bold",
	});
}

export default Component;
