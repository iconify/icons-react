import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/k/kq1ja_lbr.css';
import '../../css/l/l5flq3uow.css';
import '../../css/c/cwn0h9bfo.css';
import '../../css/q/qmoqhhlgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="kq1ja_lbr"/><path class="l5flq3uow"/><path class="cwn0h9bfo"/><path class="qmoqhhlgz"/></g>`,
		"fallback": "iconoir:three-points-circle",
	});
}

export default Component;
