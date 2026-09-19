import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxpyd0bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxpyd0bte"/>`,
		"fallback": "grommet-icons:toast",
	});
}

export default Component;
