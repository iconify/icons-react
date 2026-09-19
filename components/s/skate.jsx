import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_z58vwaq.css';
import '../../css/y/yqq7mwbip.css';
import '../../css/y/y658z3bch.css';
import '../../css/p/p0039-bag.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_z58vwaq"/><path class="yqq7mwbip"/><path class="y658z3bch"/><path class="p0039-bag"/></g>`,
		"fallback": "icon-park:skate",
	});
}

export default Component;
