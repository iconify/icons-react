import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suepl7i9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suepl7i9x"/>`,
		"fallback": "griddy-icons:timer-minus-filled",
	});
}

export default Component;
