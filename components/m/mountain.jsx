import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpkvnaclu.css';
import '../../css/a/ancp26bpz.css';
import '../../css/r/r5hk37bdw.css';
import '../../css/h/hb2gdxb9w.css';
import '../../css/u/ugoj8yokz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cpkvnaclu"/><path class="ancp26bpz"/><path class="r5hk37bdw"/><path class="hb2gdxb9w"/><path class="ugoj8yokz"/></g>`,
		"fallback": "fluent-emoji-flat:mountain",
	});
}

export default Component;
