import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p14n8bc8l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k8joftj-v.css';
import '../../css/v/vffpfaczr.css';
import '../../css/n/nzuptnbav.css';
import '../../css/p/pxm2isbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p14n8bc8l secondary"/><g class="dt0cm9dhy primary"><path class="k8joftj-v"/><path class="vffpfaczr"/><path class="nzuptnbav"/><path class="pxm2isbes"/></g>`,
		"fallback": "iconaut:tape-measure-duo",
	});
}

export default Component;
