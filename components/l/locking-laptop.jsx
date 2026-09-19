import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/e8jxhdczm.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/q/q43juwmyx.css';
import '../../css/l/l-pts9b2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="e8jxhdczm"/><path class="mp3b3lb8i"/><rect class="q43juwmyx"/><path class="l-pts9b2b"/></g>`,
		"fallback": "icon-park-outline:locking-laptop",
	});
}

export default Component;
