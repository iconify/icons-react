import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oapu8s0xw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oapu8s0xw"/>`,
		"fallback": "pinhead:plane-cruising",
	});
}

export default Component;
