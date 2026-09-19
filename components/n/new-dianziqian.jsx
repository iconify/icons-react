import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lladf0b0k.css';
import '../../css/q/q3_qw6b8e.css';
import '../../css/r/rk9-wgvlh.css';
import '../../css/w/w76jl489n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lladf0b0k"/><path class="q3_qw6b8e"/><path class="rk9-wgvlh"/><path class="w76jl489n"/></g>`,
		"fallback": "icon-park-outline:new-dianziqian",
	});
}

export default Component;
