import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9jlcdljy.css';
import '../../css/n/ny_g8_b-q.css';
import '../../css/h/hrtbh56zp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9jlcdljy"/><path class="ny_g8_b-q"/><path clip-rule="evenodd" class="hrtbh56zp"/></g>`,
		"fallback": "streamline-flex-color:watch-square-menu-flat",
	});
}

export default Component;
