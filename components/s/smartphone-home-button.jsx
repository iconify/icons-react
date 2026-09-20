import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/il7wpu91y.css';
import '../../css/m/mh3pkcc1w.css';
import '../../css/b/bbyl-z2kh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="il7wpu91y"/><path clip-rule="evenodd" class="mh3pkcc1w"/><path class="bbyl-z2kh"/></g>`,
		"fallback": "pepicons-print:smartphone-home-button",
	});
}

export default Component;
