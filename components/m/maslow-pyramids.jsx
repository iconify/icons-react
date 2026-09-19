import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j0o3a74mp.css';
import '../../css/g/g0t_6qahn.css';
import '../../css/f/frmm1dwzb.css';
import '../../css/i/ismxphoxz.css';
import '../../css/g/g5rj52b6j.css';
import '../../css/o/op7tkue1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="j0o3a74mp"/><path class="g0t_6qahn"/><path class="frmm1dwzb"/><path class="ismxphoxz"/><path class="g5rj52b6j"/><path class="op7tkue1l"/></g>`,
		"fallback": "icon-park-outline:maslow-pyramids",
	});
}

export default Component;
