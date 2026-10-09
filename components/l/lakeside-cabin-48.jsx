import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhaob1brm.css';
import '../../css/j/jcj3-xbzt.css';
import '../../css/w/w56nxtbio.css';
import '../../css/u/ua_1xhq5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhaob1brm"/><path class="jcj3-xbzt"/><path class="w56nxtbio"/><path class="ua_1xhq5f"/>`,
		"fallback": "energy-icons:lakeside-cabin-48",
	});
}

export default Component;
