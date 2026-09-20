import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knz28iicx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knz28iicx"/>`,
		"fallback": "material-icon-theme:steadybit",
	});
}

export default Component;
