import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa2prg0rq.css';
import '../../css/q/qpyqn2b5e.css';
import '../../css/r/r5esj3sez.css';
import '../../css/i/iq6pp1bcj.css';
import '../../css/x/xiwaejb0i.css';
import '../../css/b/b3-h7zkiq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pa2prg0rq"><path class="qpyqn2b5e"/><path class="r5esj3sez"/><path class="iq6pp1bcj"/><path class="xiwaejb0i"/><path class="b3-h7zkiq cls-4"/></g>`,
		"fallback": "material-icon-theme:opentofu-light",
	});
}

export default Component;
