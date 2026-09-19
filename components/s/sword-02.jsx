import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ljkplmvoy.css';
import '../../css/w/w9_ugvb0e.css';
import '../../css/h/hfutfmpoa.css';
import '../../css/i/i9gyr2bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ljkplmvoy"/><path class="w9_ugvb0e"/><path class="hfutfmpoa"/><path class="i9gyr2bxw"/></g>`,
		"fallback": "hugeicons:sword-02",
	});
}

export default Component;
