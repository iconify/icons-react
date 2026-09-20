import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atv7fmb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atv7fmb2i"/>`,
		"fallback": "simple-icons:ticketmaster",
	});
}

export default Component;
