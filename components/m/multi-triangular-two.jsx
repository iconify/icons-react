import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os1b0yi3n.css';
import '../../css/z/zrq7btb1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="os1b0yi3n"/><path class="zrq7btb1h"/></g>`,
		"fallback": "icon-park:multi-triangular-two",
	});
}

export default Component;
