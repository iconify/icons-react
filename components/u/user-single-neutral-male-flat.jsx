import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f254y7lap.css';
import '../../css/s/sa2dgcb0d.css';
import '../../css/l/l33p-5tkx.css';
import '../../css/o/o9gw0lb4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f254y7lap"/><path class="sa2dgcb0d"/><path clip-rule="evenodd" class="l33p-5tkx"/><path clip-rule="evenodd" class="o9gw0lb4x"/></g>`,
		"fallback": "streamline-plump-color:user-single-neutral-male-flat",
	});
}

export default Component;
