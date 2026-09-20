import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tml1jrblw.css';
import '../../css/l/le55m9t-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tml1jrblw"/><path class="le55m9t-j"/></g>`,
		"fallback": "tdesign:text-drawing",
	});
}

export default Component;
