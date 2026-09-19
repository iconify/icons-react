import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vie_2cbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vie_2cbdj"/>`,
		"fallback": "griddy-icons:sustainable-energy-filled",
	});
}

export default Component;
