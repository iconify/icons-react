import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qvc41gb5u.css';
import '../../css/y/y7qr96peg.css';
import '../../css/d/dspw8hbbc.css';
import '../../css/p/psjnwlbam.css';
import '../../css/o/ooehffciy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="qvc41gb5u"/><path class="y7qr96peg"/><path class="dspw8hbbc"/><path class="psjnwlbam"/><path class="ooehffciy"/></g>`,
		"fallback": "icon-park:map-draw",
	});
}

export default Component;
