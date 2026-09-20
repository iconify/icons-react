import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc41qkq7r.css';
import '../../css/u/uw9kbjbrf.css';
import '../../css/q/qcpl0ey1i.css';
import '../../css/r/rvp-1owcw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc41qkq7r"/><path class="uw9kbjbrf"/><path class="qcpl0ey1i"/><path class="rvp-1owcw"/>`,
		"fallback": "selfhst:microsoft-clipchamp-dark",
	});
}

export default Component;
