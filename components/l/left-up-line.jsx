import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6nwf-u2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6nwf-u2v"/>`,
		"fallback": "si:left-up-line",
	});
}

export default Component;
