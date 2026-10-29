import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zvg828b2b.css';
import '../../css/p/p7t-k7b9k.css';
import '../../css/a/auv8ax49r.css';
import '../../css/h/hizvppidl.css';
import '../../css/o/ogxojob7a.css';
import '../../css/p/pde3dsbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zvg828b2b"/><path class="p7t-k7b9k wm-deco"/><path class="auv8ax49r wm-k"/><path class="hizvppidl wm-k"/><path class="ogxojob7a wm-a"/><path class="pde3dsbiw wm-a"/></g>`,
		"fallback": "withicons:sky-lantern-blueprint",
	});
}

export default Component;
