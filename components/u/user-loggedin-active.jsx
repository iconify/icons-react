import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u89970-3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u89970-3p"/>`,
		"fallback": "nrk:user-loggedin-active",
	});
}

export default Component;
