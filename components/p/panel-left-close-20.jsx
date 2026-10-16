import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgiazbbrf.css';
import '../../css/z/znvkcjljr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgiazbbrf"/><path class="znvkcjljr"/>`,
		"fallback": "energy-icons:panel-left-close-20",
	});
}

export default Component;
