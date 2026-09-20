import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_6qto9cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_6qto9cg"/>`,
		"fallback": "ri:java-fill",
	});
}

export default Component;
