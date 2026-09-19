import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a7xcxpzgm.css';
import '../../css/t/tfw6sbcwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="a7xcxpzgm"/><path class="tfw6sbcwe"/></g>`,
		"fallback": "icon-park:paypal",
	});
}

export default Component;
