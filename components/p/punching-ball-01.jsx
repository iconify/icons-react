import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cbr0shbpp.css';
import '../../css/t/tqi_khm-q.css';
import '../../css/i/ilxf184hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cbr0shbpp"/><path class="tqi_khm-q"/><path class="ilxf184hs"/></g>`,
		"fallback": "hugeicons:punching-ball-01",
	});
}

export default Component;
