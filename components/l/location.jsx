import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upv8a5aru.css';
import '../../css/y/y67djbpgr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upv8a5aru"/><path class="y67djbpgr"/>`,
		"fallback": "carbon:location",
	});
}

export default Component;
