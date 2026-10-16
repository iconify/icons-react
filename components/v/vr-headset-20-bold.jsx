import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9wztb3tr.css';
import '../../css/d/d3xoy3b4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9wztb3tr"/><path class="d3xoy3b4c"/>`,
		"fallback": "energy-icons:vr-headset-20-bold",
	});
}

export default Component;
