import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s19bvnbge.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s19bvnbge"/>`,
		"fallback": "pepicons:triangle-right",
	});
}

export default Component;
