import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f74-c9bya.css';
import '../../css/x/x0niscc9w.css';
import '../../css/t/tib8tkbmc.css';
import '../../css/y/y980iw13s.css';
import '../../css/a/a8y_7abhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f74-c9bya"/><path class="x0niscc9w"/><path class="tib8tkbmc"/><path class="y980iw13s"/><path class="a8y_7abhh"/></g>`,
		"fallback": "thesvg:sensenova",
	});
}

export default Component;
