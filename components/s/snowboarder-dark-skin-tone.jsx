import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_raf5bng.css';
import '../../css/p/punkoxecs.css';
import '../../css/p/pxqia9bxh.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t0pwn3udk.css';
import '../../css/d/diehlxhqz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e_raf5bng"><circle class="punkoxecs"/><path class="pxqia9bxh"/></g><g class="x8poo_bjf"><circle class="punkoxecs"/><path class="t0pwn3udk"/><path class="diehlxhqz"/></g>`,
		"fallback": "openmoji:snowboarder-dark-skin-tone",
	});
}

export default Component;
