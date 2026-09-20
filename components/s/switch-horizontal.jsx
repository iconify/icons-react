import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol2ps3w7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol2ps3w7v"/>`,
		"fallback": "tabler:switch-horizontal",
	});
}

export default Component;
