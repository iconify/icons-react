import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc14oeb9i.css';
import '../../css/m/mpw226b7d.css';
import '../../css/d/dfju2ib8j.css';
import '../../css/v/v79z25b5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc14oeb9i"/><path class="mpw226b7d"/><path class="dfju2ib8j"/><path class="v79z25b5b"/>`,
		"fallback": "fxemoji:station",
	});
}

export default Component;
