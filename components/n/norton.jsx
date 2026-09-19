import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea1bd19wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea1bd19wn"/>`,
		"fallback": "grommet-icons:norton",
	});
}

export default Component;
