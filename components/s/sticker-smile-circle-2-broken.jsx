import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gmqhdrbww.css';
import '../../css/t/th0xxsgwf.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';
import '../../css/g/g4gus2y6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="gmqhdrbww"/><path class="th0xxsgwf"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/><path class="g4gus2y6w"/></g>`,
		"fallback": "solar:sticker-smile-circle-2-broken",
	});
}

export default Component;
