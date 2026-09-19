import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg_zdh7-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cg_zdh7-y"/>`,
		"fallback": "griddy-icons:time-update",
	});
}

export default Component;
