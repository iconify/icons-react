import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znmpxwa2p.css';
import '../../css/f/f1sqjublo.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdguohbwi.css';
import '../../css/e/e0eu2sbed.css';
import '../../css/y/yq1rfnbag.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znmpxwa2p"/><path class="f1sqjublo"/><g class="cuyn6tgcc"><path class="hdguohbwi"/><path class="e0eu2sbed"/></g><path class="yq1rfnbag"/>`,
		"fallback": "iwwa:swipe",
	});
}

export default Component;
