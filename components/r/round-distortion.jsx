import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/o/o9o2-obrk.css';
import '../../css/p/pxwibebni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><circle class="kb9zbkb1z"/><path class="o9o2-obrk"/><path class="pxwibebni"/></g>`,
		"fallback": "icon-park-outline:round-distortion",
	});
}

export default Component;
