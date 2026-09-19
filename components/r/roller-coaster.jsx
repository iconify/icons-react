import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcji70blh.css';
import '../../css/t/tqd6mgdgh.css';
import '../../css/s/s1dmbnt6f.css';
import '../../css/q/qmr92_81l.css';
import '../../css/g/gm1nl1b2r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcji70blh"/><path class="tqd6mgdgh"/><path class="s1dmbnt6f"/><path class="qmr92_81l"/><path class="gm1nl1b2r"/></g>`,
		"fallback": "fluent-emoji-flat:roller-coaster",
	});
}

export default Component;
