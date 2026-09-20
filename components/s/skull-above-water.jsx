import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc-0318zv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc-0318zv"/>`,
		"fallback": "pinhead:skull-above-water",
	});
}

export default Component;
