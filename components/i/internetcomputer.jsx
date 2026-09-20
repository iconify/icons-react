import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr3g4nxfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr3g4nxfv"/>`,
		"fallback": "simple-icons:internetcomputer",
	});
}

export default Component;
