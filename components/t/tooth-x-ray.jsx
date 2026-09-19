import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndvb1fb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndvb1fb-s"/>`,
		"fallback": "griddy-icons:tooth-x-ray",
	});
}

export default Component;
