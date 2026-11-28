import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfpsheo0q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u3q6p0b6p.css';
import '../../css/r/rju4ki1jr.css';
import '../../css/w/whvag0h5n.css';
import '../../css/k/kkq2fcb-y.css';
import '../../css/d/dwv_ehb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yfpsheo0q"/><g class="dt0cm9dhy primary"><path class="u3q6p0b6p"/><path class="rju4ki1jr"/><path class="whvag0h5n"/><path class="kkq2fcb-y"/><path class="dwv_ehb5e"/></g>`,
		"fallback": "iconaut:sheep-duo",
	});
}

export default Component;
