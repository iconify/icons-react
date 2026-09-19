import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4t7nkb3h.css';
import '../../css/x/xuyrlebfz.css';
import '../../css/u/ugsg8xbov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4t7nkb3h"/><path class="xuyrlebfz"/><path class="ugsg8xbov"/></g>`,
		"fallback": "fluent-emoji-flat:unlocked",
	});
}

export default Component;
