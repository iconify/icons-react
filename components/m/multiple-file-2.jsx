import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5svwacyt.css';
import '../../css/y/y3fl8ljqy.css';
import '../../css/x/x8wlzb1of.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5svwacyt"/><path class="y3fl8ljqy"/><path class="x8wlzb1of"/></g>`,
		"fallback": "streamline-color:multiple-file-2",
	});
}

export default Component;
