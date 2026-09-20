import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p69k2hb-c.css';
import '../../css/h/hsy_ihbwj.css';
import '../../css/k/kc5exl21q.css';

const viewBox = {"width":784.203,"height":1000,"left":-252.435,"top":-223.924};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p69k2hb-c"/><path class="hsy_ihbwj"/><path class="kc5exl21q"/>`,
		"fallback": "thesvg-color:warner-bros",
	});
}

export default Component;
