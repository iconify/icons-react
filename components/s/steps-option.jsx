import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olsr4lj8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olsr4lj8h"/>`,
		"fallback": "grommet-icons:steps-option",
	});
}

export default Component;
