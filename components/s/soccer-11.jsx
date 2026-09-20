import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfo2c8bzr.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfo2c8bzr"/>`,
		"fallback": "maki:soccer-11",
	});
}

export default Component;
