import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/e/e0cq8_bev.css';
import '../../css/g/gmxgd0boe.css';
import '../../css/l/l33uf3b3d.css';
import '../../css/q/qanqmlr1b.css';
import '../../css/m/m9snp5b6v.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="e0cq8_bev"/><path class="gmxgd0boe"/><path class="l33uf3b3d"/><path class="qanqmlr1b"/><path class="m9snp5b6v"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:transgender-flag",
	});
}

export default Component;
