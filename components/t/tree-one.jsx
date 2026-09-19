import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/prjqq_h_g.css';
import '../../css/q/quptsdbge.css';
import '../../css/l/lfsiu7tnm.css';
import '../../css/f/f0j6j6igf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><ellipse class="prjqq_h_g"/><path class="quptsdbge"/><path class="lfsiu7tnm"/><path class="f0j6j6igf"/></g>`,
		"fallback": "icon-park-outline:tree-one",
	});
}

export default Component;
