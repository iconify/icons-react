import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsjo5acyy.css';
import '../../css/t/ttbk3nb0v.css';
import '../../css/d/doj_-lcem.css';
import '../../css/n/n_2mp4b-m.css';
import '../../css/z/zlz1aobqr.css';
import '../../css/r/r7l6t9gds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsjo5acyy"/><path class="ttbk3nb0v"/><circle class="doj_-lcem"/><circle class="n_2mp4b-m"/><path class="zlz1aobqr"/><path class="r7l6t9gds"/>`,
		"fallback": "flat-color-icons:multiple-cameras",
	});
}

export default Component;
