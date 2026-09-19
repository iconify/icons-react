import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h1zaoacko.css';
import '../../css/t/tk84jfbit.css';
import '../../css/w/wx_uucbus.css';
import '../../css/c/c_liyzvfj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h1zaoacko"/><path class="tk84jfbit"/><path class="wx_uucbus"/><path class="c_liyzvfj"/></g>`,
		"fallback": "glyphs:king",
	});
}

export default Component;
