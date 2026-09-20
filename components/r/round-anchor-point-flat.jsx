import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmm7xbc7x.css';
import '../../css/b/b_jiz4yhu.css';
import '../../css/e/evoe3icyd.css';
import '../../css/v/v_tsg-bbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tmm7xbc7x"/><path clip-rule="evenodd" class="b_jiz4yhu"/><path clip-rule="evenodd" class="evoe3icyd"/><path class="v_tsg-bbm"/></g>`,
		"fallback": "streamline-plump-color:round-anchor-point-flat",
	});
}

export default Component;
