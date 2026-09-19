import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5b9_rbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5b9_rbgi"/>`,
		"fallback": "griddy-icons:salami-filled",
	});
}

export default Component;
