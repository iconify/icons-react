import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9-_hx82t.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9-_hx82t"/>`,
		"fallback": "jam:tree",
	});
}

export default Component;
