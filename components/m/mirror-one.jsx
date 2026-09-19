import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b-396ydgx.css';
import '../../css/o/oa8odlbac.css';
import '../../css/t/tqvdlybjq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="b-396ydgx"/><path class="oa8odlbac"/><path class="tqvdlybjq"/></g>`,
		"fallback": "icon-park:mirror-one",
	});
}

export default Component;
