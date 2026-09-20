import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/whbuk40qj.css';
import '../../css/c/ctzipybbn.css';
import '../../css/o/oik4ogb9d.css';
import '../../css/h/hn99g3b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="whbuk40qj"/><path class="ctzipybbn"/><path class="oik4ogb9d"/><path class="hn99g3b2a"/></g>`,
		"fallback": "reicon:like-dislike",
	});
}

export default Component;
