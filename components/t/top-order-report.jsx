import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mcv_3obvg.css';
import '../../css/z/z0oqk_b7p.css';
import '../../css/a/a1ecnmvsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="mcv_3obvg"/><path class="z0oqk_b7p"/><path class="a1ecnmvsy"/></g>`,
		"fallback": "streamline-plump:top-order-report",
	});
}

export default Component;
