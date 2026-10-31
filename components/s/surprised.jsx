import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/b/b_g-li6ok.css';
import '../../css/q/qrvatkp6m.css';
import '../../css/x/xgb3e8f5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="b_g-li6ok"/><path class="qrvatkp6m"/><path class="xgb3e8f5e"/></g>`,
		"fallback": "withicons-brutal:surprised",
	});
}

export default Component;
