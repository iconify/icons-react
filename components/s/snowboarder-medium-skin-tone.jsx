import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pq-abme.css';
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
		"content": `<g class="k9pq-abme"><circle class="punkoxecs"/><path class="pxqia9bxh"/></g><g class="x8poo_bjf"><circle class="punkoxecs"/><path class="t0pwn3udk"/><path class="diehlxhqz"/></g>`,
		"fallback": "openmoji:snowboarder-medium-skin-tone",
	});
}

export default Component;
