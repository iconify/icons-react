import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhd9ywe5w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uckfmf0pp.css';
import '../../css/p/pz16v8edt.css';
import '../../css/r/rxtbfzqvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhd9ywe5w secondary"/><g class="dt0cm9dhy primary"><path class="uckfmf0pp"/><path class="pz16v8edt"/><path class="rxtbfzqvx"/></g>`,
		"fallback": "iconaut:tree-deciduous-duo",
	});
}

export default Component;
