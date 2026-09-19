import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7_7-h00t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7_7-h00t"/>`,
		"fallback": "griddy-icons:leafs",
	});
}

export default Component;
