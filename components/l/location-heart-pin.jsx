import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u92x10bie.css';
import '../../css/z/za30q9tjd.css';
import '../../css/c/c0fl3acsx.css';
import '../../css/q/q8-bv26ph.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u92x10bie"/><path class="za30q9tjd"/><path class="c0fl3acsx"/><path class="q8-bv26ph"/></g>`,
		"fallback": "streamline-flex-color:location-heart-pin",
	});
}

export default Component;
