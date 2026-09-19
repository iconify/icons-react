import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z7boecvbc.css';
import '../../css/r/ry0_30a-t.css';
import '../../css/q/qzndgwhin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="z7boecvbc"/><path class="ry0_30a-t"/><path class="qzndgwhin"/></g>`,
		"fallback": "icon-park:renal",
	});
}

export default Component;
