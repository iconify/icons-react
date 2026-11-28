import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="uckfmf0pp"/><path class="pz16v8edt"/><path class="rxtbfzqvx"/></g>`,
		"fallback": "iconaut:tree-deciduous",
	});
}

export default Component;
