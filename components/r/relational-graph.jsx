import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b533hcelw.css';
import '../../css/g/gnjz5lq-f.css';
import '../../css/a/amc7g4h-g.css';
import '../../css/r/rz08hnbgv.css';
import '../../css/q/q3u1c6bhx.css';
import '../../css/p/p-w1uacgb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b533hcelw"/><path class="gnjz5lq-f"/><path class="amc7g4h-g"/><circle class="rz08hnbgv"/><circle class="q3u1c6bhx"/><circle class="p-w1uacgb"/></g>`,
		"fallback": "icon-park:relational-graph",
	});
}

export default Component;
