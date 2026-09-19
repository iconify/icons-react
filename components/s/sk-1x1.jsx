import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy85065lx.css';
import '../../css/u/u7sjykb1e.css';
import '../../css/o/onyqr8g1f.css';
import '../../css/y/yei7kmfgc.css';
import '../../css/t/tii6inn6s.css';
import '../../css/u/u1bmbxbnh.css';
import '../../css/c/chmcmpb2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy85065lx"/><path class="u7sjykb1e"/><path class="onyqr8g1f"/><path class="yei7kmfgc"/><path class="tii6inn6s"/><path class="u1bmbxbnh"/><path class="chmcmpb2b"/>`,
		"fallback": "flag:sk-1x1",
	});
}

export default Component;
