import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l2325kb9f.css';
import '../../css/k/k1ag-cgsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="l2325kb9f"/><path class="k1ag-cgsk"/></g>`,
		"fallback": "icon-park-outline:preschool",
	});
}

export default Component;
