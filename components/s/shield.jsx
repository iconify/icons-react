import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6-p4wl9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6-p4wl9y"/>`,
		"fallback": "grommet-icons:shield",
	});
}

export default Component;
