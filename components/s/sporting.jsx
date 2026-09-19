import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b62w8-blj.css';
import '../../css/k/kpfevac6n.css';
import '../../css/q/q_slg7f6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="b62w8-blj"/><path class="kpfevac6n"/><path class="q_slg7f6d"/></g>`,
		"fallback": "icon-park:sporting",
	});
}

export default Component;
