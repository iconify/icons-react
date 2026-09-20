import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6npdccvb.css';
import '../../css/f/f7yrgob5n.css';
import '../../css/r/rkd56vgis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6npdccvb"/><path class="f7yrgob5n"/><path clip-rule="evenodd" class="rkd56vgis"/>`,
		"fallback": "stash:stopwatch",
	});
}

export default Component;
