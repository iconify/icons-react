import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n32go5b0t.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n32go5b0t"/>`,
		"fallback": "fa6-regular:square-minus",
	});
}

export default Component;
